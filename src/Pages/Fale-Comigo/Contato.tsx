import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Conect-db/firabesconection';
import './Style-Contato.sass';

export default function Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Verificar se os campos obrigatórios estão preenchidos
        if (!name || !email || !message) {
            setFeedbackMessage('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        setIsLoading(true);

        try {
            // Adicionar dados ao Firestore sem armazenar a referência do documento
            await addDoc(collection(db, 'Form'), {
                Name: name,
                Email: email,
                Message: message,
            });

            setIsFeedbackVisible(true);
            setFeedbackMessage('Formulário enviado com sucesso!');

            // Limpar o formulário após o envio
            setName("");
            setEmail("");
            setMessage("");

            setIsLoading(false);


             // Esconder a mensagem de feedback após 3 segundos
             setTimeout(() => {
                setIsFeedbackVisible(false);
            }, 2500);

         

        } catch (error) {
            console.error('Erro ao enviar o formulário: ', error);
            setIsLoading(false);

            // Exibir mensagem de erro para o usuário
            setFeedbackMessage('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };

    return (
        <main className="main-form">
            <Header />
            <div className="container-cantato">
                <div className="style-form">
                    <h1 className="text-form-contato">Envie sua mensagem</h1>
                    <form className="container-form" onSubmit={handleSubmit}>
                        <div className="container-label">
                            <label className="label-form">Nome</label>
                            <input  className= "input-form" type='text' id="name" required placeholder='Seu nome'
                                value={name} onChange={(e) => { setName(e.target.value) }} />

                            <label className="label-form">Email</label>
                            <input className= "input-form" type="email" id="email" required placeholder="Email para contato"
                                value={email} onChange={(e) => { setEmail(e.target.value) }} />

                            <label className="label-form">Mensagem</label>
                            <textarea className="textarea-form" name="message" id="message" required placeholder="Mensagem"
                                value={message} onChange={(e) => { setMessage(e.target.value) }} />

                            <button className="btn-form-contato" type="submit" disabled={isLoading}>
                                {isLoading ? 'Enviando...' : 'Enviar'}
                            </button>

                            
                            {/* Exibir mensagem de feedback para o usuário */}
                            {isFeedbackVisible && (
                                <div className={feedbackMessage.includes('sucesso') ? 'success' : 'error'}>
                                    {feedbackMessage}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
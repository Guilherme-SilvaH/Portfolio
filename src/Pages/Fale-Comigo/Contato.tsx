import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Conect-db/firabesconection'

export default function Contato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");
    
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
    
            // Limpar o formulário após o envio
            setName("");
            setEmail("");
            setMessage("");
    
            setIsLoading(false);
    
            setFeedbackMessage('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar o formulário: ', error);
            setIsLoading(false);
    
            // Exibir mensagem de erro para o usuário
            setFeedbackMessage('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };

    return (
        <main>
            <Header />
            <div className="container-cantato">
                <form className="container form" onSubmit={handleSubmit}>
                    <div className="container-label">
                        <label className="label-name" />
                        <input type='text' id="name" required placeholder='Seu nome'
                            value={name} onChange={(e) => { setName(e.target.value) }} />

                        <label className="label-email" />
                        <input type="email" id="email" required placeholder="Email para contato"
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        <label className="label-message" />
                        <textarea name="message" id="message" required placeholder="Mensagem"
                            value={message} onChange={(e) => { setMessage(e.target.value) }} />

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Enviando...' : 'Enviar'}
                        </button>

                        {/* Exibir mensagem de feedback para o usuário */}
                        {feedbackMessage && (
                            <div className={feedbackMessage.includes('sucesso') ? 'success' : 'error'}>
                                {feedbackMessage}
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <Footer />
        </main>
    );
}
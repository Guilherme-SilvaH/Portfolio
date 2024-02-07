
const NameVite = () => {
  const tituloDoSite = import.meta.env.VITE_APP_TITLE;
  const caminhoDaImagem = '../../assets/Design_a_logo_for_my_personal_portfolio_as_a_Web-PhotoRoom.png-PhotoRoom (1).png';

  return (
    <div>
      <h1>{tituloDoSite}</h1>
      <img src={caminhoDaImagem} alt="Nova Imagem" />
     
    </div>
  );
};

export default NameVite;
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import { auth } from '../firebase/firebaseConfig'; // A instância auth
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Instanciando o navigate

  const handleSearchAccount = async () => {
    try {
      await sendPasswordResetEmail(auth, emailOrPhone);
      setMessage('Um email de redefinição de senha foi enviado para o endereço fornecido.');
      // Redireciona para a página de login após o envio do email
      navigate('/login'); // O usuário é redirecionado para /login
    } catch (error) {
      setMessage('Erro ao enviar email de redefinição de senha. Verifique as informações e tente novamente.');
      console.error('Erro ao procurar conta: ', error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Encontre sua conta</h2>
      <p>Insira seu email ou número de celular para procurar sua conta.</p>
      <input
        type="text"
        placeholder="Digite seu email ou número de celular"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
      />
      {message && <p className="message">{message}</p>}
      <div className="button-group">
        <button className="cancel-button" onClick={() => setEmailOrPhone('')}>Cancelar</button>
        <button className="search-button" onClick={handleSearchAccount}>Pesquisar</button>
      </div>
    </div>
  );
};

export default ForgotPassword;


// import React, { useState } from 'react';
// import { getAuth, sendPasswordResetEmail } from 'firebase/auth';  // Certificando que a importação está correta
// import { auth } from '../firebase/firebaseConfig';  // Importando a instância auth de seu firebaseConfig
// import '../styles/ForgotPassword.css';  // Estilos, se houver

// const ForgotPassword = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSearchAccount = async () => {
//     try {
//       // Aqui você usa a instância de auth para enviar o reset de senha
//       await sendPasswordResetEmail(auth, emailOrPhone);
//       setMessage('Um email de redefinição de senha foi enviado para o endereço fornecido.');
//     } catch (error) {
//       setMessage('Erro ao enviar email de redefinição de senha. Verifique as informações e tente novamente.');
//       console.error('Erro ao procurar conta: ', error);
//     }
//   };

//   return (
//     <div className="forgot-password-container">
//       <h2>Encontre sua conta</h2>
//       <p>Insira seu email ou número de celular para procurar sua conta.</p>
//       <input
//         type="text"
//         placeholder="Digite seu email ou número de celular"
//         value={emailOrPhone}
//         onChange={(e) => setEmailOrPhone(e.target.value)}
//       />
//       {message && <p className="message">{message}</p>}
//       <div className="button-group">
//         <button className="cancel-button" onClick={() => setEmailOrPhone('')}>Cancelar</button>
//         <button className="search-button" onClick={handleSearchAccount}>Pesquisar</button>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

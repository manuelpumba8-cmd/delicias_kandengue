// ============================================
// 🔥 CONFIGURAÇÃO FIREBASE
// ============================================
// ⚠️ SUBSTITUA ESTES DADOS PELOS DO SEU PROJETO FIREBASE ⚠️
// Como pegar: Firebase Console → Projeto → Configurações do projeto → Seus apps → Configuração do SDK

const firebaseConfig = {
    apiKey: "SUA_API_KEY",              // ⚠️ Pegar no Firebase Console
    authDomain: "SEU_PROJETO.firebaseapp.com",  // ⚠️ Pegar no Firebase Console
    projectId: "SEU_PROJETO",           // ⚠️ Pegar no Firebase Console
    storageBucket: "SEU_PROJETO.appspot.com",   // ⚠️ Pegar no Firebase Console
    messagingSenderId: "SEU_SENDER_ID", // ⚠️ Pegar no Firebase Console
    appId: "SEU_APP_ID"                 // ⚠️ Pegar no Firebase Console
};

// ============================================
// INICIALIZAR FIREBASE
// ============================================
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// ============================================
// PERSISTÊNCIA DE LOGIN
// ============================================
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// ============================================
// EXPORTAR PARA USAR EM OUTROS FICHEIROS
// ============================================
// (Não precisa exportar, pois estamos usando script tags)
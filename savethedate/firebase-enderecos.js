/* firebase-enderecos.js — salva os endereços enviados pelos convidados no
 * Firestore (mesmo projeto do painel admin: casamento-lp), coleção "enderecos".
 * Página pública: NÃO exige login. A escrita é permitida pelas regras do
 * Firestore (allow create) e a leitura fica restrita ao casal (logado). */
(function () {
  "use strict";
  var cfg = {
    apiKey: "AIzaSyDTeXPQch2fabFJbtPmo4Y_pK5SJum6Go0",
    authDomain: "casamento-lp.firebaseapp.com",
    projectId: "casamento-lp",
    storageBucket: "casamento-lp.firebasestorage.app",
    messagingSenderId: "1038904994432",
    appId: "1:1038904994432:web:e092af39b7994c6b115465",
  };
  try {
    if (typeof firebase === "undefined") return; // SDK não carregou
    if (!firebase.apps || !firebase.apps.length) firebase.initializeApp(cfg);
    var db = firebase.firestore();

    // Recebe o objeto do formulário e grava um documento em "enderecos".
    window.saveEndereco = function (f) {
      f = f || {};
      var campos = ["nome", "telefone", "email", "cep", "rua", "numero", "complemento", "bairro", "cidade", "uf"];
      var doc = {};
      campos.forEach(function (k) { doc[k] = (f[k] == null ? "" : String(f[k])).slice(0, 180); });
      doc.criadoEm = firebase.firestore.FieldValue.serverTimestamp();
      return db.collection("enderecos").add(doc);
    };
  } catch (e) {
    console.error("[firebase-enderecos] erro ao iniciar:", e && e.message);
  }
})();

const User = require("../models/User");

class UserController {
  createUser(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
        CPF: req.body.CPF,
        CRO: req.body.CRO,
      },
    }).then((user) => {
      if (user) {
        res
          .status(400)
          .json({ mensagem: "Já existe um usuário com esses dados" });
      } else {
        User.create({
          nome: req.body.nome,
          telefone: req.body.telefone,
          email: req.body.email,
          CPF: req.body.CPF,
          CRO: req.body.CRO,
          permissao: req.body.permissao,
        })
          .then(function (resultado) {
            res.json({ mensagem: "Usuário inserido com sucesso" });
          })
          .catch(function (erro) {
            res
              .status(500)
              .json({ mensagem: "Erro ao inserir usuário" + erro });
          });
      }
    });
  }

  async readUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar usuários" });
    }
  }

  updateUsers() {
    User.update(
      { nome: "Novo nome", telefone: "Novo telefone" },
      { where: { id: 1 } }
    )
      .then(() => {
        console.log("Dados atualizados com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao atualizar dados: ", error);
      });
  }
}

// class UserController {
//   createUser(req, res) {
//   return new Promise((resolve, reject) => {
//   User.findOne({
//   where: {
//   email: req.body.email,
//   CPF: req.body.CPF,
//   CRO: req.body.CRO,
//   },
//   }).then((user) => {
//   if (user) {
//   reject({ mensagem: "Já existe um usuário com esses dados" });
//   } else {
//   User.create({
//   nome: req.body.nome,
//   telefone: req.body.telefone,
//   email: req.body.email,
//   CPF: req.body.CPF,
//   CRO: req.body.CRO,
//   permissao: req.body.permissao,
//   })
//   .then((resultado) => {
//   resolve({ mensagem: "Usuário inserido com sucesso" });
//   })
//   .catch((erro) => {
//   reject({ mensagem: "Erro ao inserir usuário" + erro });
//   });
//   }
//   });
//   });
//   }
//   }

module.exports = new UserController();

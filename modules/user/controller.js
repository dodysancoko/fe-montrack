const UserController = {
  getAll: async (req, res) => {
    try {
      console.log("halo");

      return res.status(200).send({ message: "Success", data: [1, 2, 3] });
    } catch (error) {
      return res.status(500).send("internal server error");
    }
  },
};

module.exports = UserController;

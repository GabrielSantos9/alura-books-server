const { Router } = require("express");
const router = Router();
const {
  getFavoritos,
  postFavorito,
  deleteFavorito,
} = require("../controladores/favoritos");

router.get("/", getFavoritos);
router.post("/:id", postFavorito);
router.delete("/:id", deleteFavorito);

module.exports = router;
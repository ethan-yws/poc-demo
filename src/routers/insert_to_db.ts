import express from "express";

const router = express.Router();

router.get("/api/insert_to_db", async (req, res) => {
  return "hello";
});

export { router as insertToDBRouter };

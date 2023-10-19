export function handler(req, res) {
   res.status(200).json({ name: "John doe" });
   return res;
}

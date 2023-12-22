import {transporter} from "./index";

const handler = async (req, res) => {

    const data = req.body


    try {
        await transporter.sendMail({
            text: "Ура"

        })
        return res.status(400).json({massage: "Ура"});
    } catch (error) {
        console.log(error)
    }

}

export default handler;
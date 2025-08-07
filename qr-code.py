
import qrcode

data = "https://sport-and-tecnology.vercel.app/"  # Cambia esta URL por la que tú quieras
qr = qrcode.make(data)
qr.save("mi_qr_app.png")
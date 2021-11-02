import React, {useState} from 'react';
import "./navbar.scss"


function Navbar(props) {
    const [btn, setBtn] = useState(false);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cityName, setCityName] = useState('');


    function menuClick() {
        setBtn(!btn)
    }


    function sendMessageGroup(e) {
        if (name.trim() !== '' && phoneNumber.trim() !== '' && cityName.trim() !== '') {
            // const token = "1107511291:AAHhs5n7YqKbOPAUAY6VioMZY9hyPtR8AIw";
            // const chat_id = -1001540934347;
            // const message=`Hudud: ${cityName} Ism: ${name}  tel: ${phoneNumber}`;
            // const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;
            // const oReq = new XMLHttpRequest();
            // oReq.open("POST", url, true);
            // oReq.send();
            // setName("");
            // setCityName('');
            // setPhoneNumber("");
            alert("Buyrutmangiz qabul qilindi");
        } else alert("Formani to'ldirng");

    }


    return (
        <>
            <nav className="navbars">
                <div className="container">
                    <div className="navs">
                        <a href="#" className="logo">
                            <img src="img/logos.png" alt="logos"/>
                        </a>
                        <ul className="nav desktop">
                            <li className="nav-item">
                                <a className="nav-link " href="#home">Nega xarid qilishingiz
                                    kerak</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#malumotlar">Ma'lumotlar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#tarkibi">Tarkibi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#afzalliklari">Afzalliklari</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn1" type="button" data-bs-toggle="modal"
                                        data-bs-target="#myModal">Buyrutma berish
                                </button>
                            </li>
                        </ul>
                        <button className="btn mobile-btn shadow-none" onClick={menuClick}>{btn ?
                            <i className="fas fa-times"/> : <i className="fas fa-bars"/>}</button>
                        {btn ?
                            <ul className="nav mobile" style={{position: "absolute", right: "0"}}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#nega">Nega xarid qilishingiz
                                        kerak</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#malumotlar">Ma'lumotlar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#tarkibi">Tarkibi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#afzalliklari">Afzalliklari</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn1" type="button" data-bs-toggle="modal"
                                            data-bs-target="#myModal">Buyrutma berish
                                    </button>
                                </li>
                            </ul> :
                            <ul className="nav mobile" style={{position: "absolute", right: "0", opacity: "0"}}/>}


                    </div>
                    <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false"
                         tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="modal-title" id="staticBackdropLabel">Sahifani to'ldiring</h3>
                                    <button type="button" className="btn close" data-bs-dismiss="modal"
                                            aria-label="Close">X
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="row">
                                        <span>
                                            <select name="#" id="hudud"
                                                    onClick={(event) => setCityName(event.target.value)}
                                                    className="form-control swing">
                                                <option disabled={true} selected={true}>Hududni tanlang</option>
                                                <option defaultValue="Andijon">Andijon</option>
                                                <option value="Buxoro">Buxoro</option>
                                                <option value="Fargʻona">Fargʻona</option>
                                                <option value="Jizzax">Jizzax</option>
                                                <option value="Namangan">Namangan</option>
                                                <option value="Navoiy">Navoiy</option>
                                                <option value="Qashqadaryo">Qashqadaryo</option>
                                                <option value="Qoraqalpogʻiston">Qoraqalpogʻiston</option>
                                                <option value="Samarqand">Samarqand</option>
                                                <option value="Sirdaryo">Sirdaryo</option>
                                                <option value="Surxondaryo">Surxondaryo</option>
                                                <option value="Toshkent">Toshkent</option>
                                                <option value="Toshkent viloyati">Toshkent viloyati</option>
                                                <option value="Xorazm">Xorazm</option>
                                            </select>
                                            <label htmlFor="artist">Hudud</label>
                                        </span>
                                        <span>
    <input className="swing" type="text" value={name}
           onChange={(event) => setName(event.target.value)}
           id="name" placeholder="Ismingizni kiriting"/>
    <label htmlFor="song">Ism</label>
  </span>
                                        <span>
    <input className="swing" type="tell" value={phoneNumber} id="phone"
           onChange={(event) => setPhoneNumber(event.target.value)} placeholder="Telefon raqamingizni kiriting"
           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxLength={13}/>
    <label htmlFor="eyes">Tel</label>
  </span>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn" onClick={sendMessageGroup}>Buyrutma</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;


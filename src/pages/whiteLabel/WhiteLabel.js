import React from 'react';
import './whiteLabel.css';
import Footer from './../../components/footer/Footer';
import titaleLineImg from './../../images/line.svg';
import teenPattiPC from './../../images/Group32.svg'

let name = React.createRef();
let quantity = React.createRef();
let mail = React.createRef();
class WhiteLabel extends React.Component {
    state = {
        productBlog: false,
        productsMassige: false,
    }
    click = (e) => {
        e.stopPropagation()
    }
    sendMassage = (event) => {
        let company = name.current.value;
        let quantityO = quantity.current.value;
        let Email = mail.current.value;
        if (company === "" || quantityO === "" || Email === "") {
            alert('Fill in all the fields')
        } else {
            alert(company + "  " + quantityO + " " + Email);
            company = name.current.value = '';
            quantityO = quantity.current.value = '';
            Email = mail.current.value = '';
            this.setState({ productsMassige: !this.state.productsMassige })
        }
        event.preventDefault();
    }
    closeMassafeBlok = () => {
        this.setState({ productsMassige: !this.state.productsMassige })
    }
    render() {
        return (
            <>
                <section id='whiteLabel'>
                    <div className='titaleDiv'>
                        <div className='titaleLine'>
                            <h1 className="titales">
                                {Number(localStorage.getItem('setLanguage')) === 1 ? "White Label"
                                : Number(localStorage.getItem('setLanguage')) === 2 ? "Ով ենք մենք՞"
                                : Number(localStorage.getItem('setLanguage')) === 3 ? 'Кто мы?'
                                : localStorage.getItem('setLanguage') === null ? "Ով ենք մենք՞" 
                                : Number(localStorage.getItem('setLanguage')) === 4}
                            </h1>
                            <img src={titaleLineImg} alt="" />
                        </div>
                        <p className="subtitle">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='teenPattiText'>
                        <div className='titaleLine'>
                            <h1 className="titales">Teen patti</h1>
                            <img src={titaleLineImg} alt="" />
                        </div>
                        <p className='teenPText'>Teen Patti is a popular Indian gambling card game just like poker.</p>
                        <p className='teenPText'>It is normally played in a group of 3 to 6 persons and uses a 52-card pack without jokers. </p>
                        <p className='teenPText'>Each player is dealt three cards face down. Before the cards are dealt, the boot amount is decided and collected from each player. </p>
                        <p className='teenPText'>The boot amount is the minimum stake amount put in the pot, which is the money kept in the centre of the table. As the game progresses the pot money grows and is won by the winner of that hand.</p>
                        <p className='teenPText'>Winner is the player who remains in the game till the completion of the hand and has the best hand or the highest hand based on the cards ranking shown below.</p>
                        <p className='teenPText'>Ranking of the cards from high to low is:</p>
                        <p className='teenNumber'>1. Trail or Set (three of same rank),</p>
                        <p className='teenNumber'>2. Pure sequence,</p>
                        <p className='teenNumber'>3. Sequence (or run),</p>
                        <p className='teenNumber'>4. Color,</p>
                        <p className='teenNumber'>5. Pair (two cards of same rank), and</p>
                        <p className='teenNumber'>6. High Card.</p>
                    </div>
                    <img src={teenPattiPC} alt="" className='teenPattiPC'/>
                    <div className='whiteLabel-writeUS'>
                        <div className='titaleLine'>
                                <h1 className="titales">Write us</h1>
                                <img src={titaleLineImg} alt="" />
                                <p>We offer a platform where you can have your own independent website</p>
                        </div>
                    </div>
                    <div className='writeUsDiv'>
                        <form id='buyForm' className='buyNowForm'  onSubmit={this.sendMassage} onClick={(e) => { e.stopPropagation() }} >
                            <div className='inputs'>
                                <input className='buyInputs' type='text' maxlength="60" required=" " ref={name} />
                                <label>Insert your name</label>
                            </div>
                            <div className='inputs'>
                                <input className='buyInputs' type='text' maxlength="60" required=" " ref={quantity} />
                                <label>Insert your email</label>
                            </div>
                            <p>Write your message</p>
                            <textarea className='buyInputsArea' rows="10" cols="50" name="comment" form="buyForm" ref={mail}></textarea>
                            <div className='backBtn'><input type="submit" className='blue_Button' /></div>
                        </form>
                        <div className='writeUsTextDiv'>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        </div>
                    </div>
                </section>
                <div className={this.state.productsMassige ? "productsMassigeDiv" : "productsMassigeDivActiv"} onClick={this.closeMassafeBlok}>
                    <div className='productMassige'>
                        <p>Your massage was successfully sent <br></br> Thank you  for your massege. Our agent will contact you</p>
                        <button className="blue_Button" onClick={this.closeMassafeBlok}>OK</button>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default WhiteLabel;
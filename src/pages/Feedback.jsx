import qr_tg from '/src/assets/image.png'
import qr_max from '/src/assets/sQREVre-.jpg'



function Feedback() {
  return (
    <div className='home'>
    
      <section id="center">
          <h1 className='name'>Уважаемые родители и ребята!</h1>
          <div className="info">             
              <h3>
                Если у вас есть вопросы, пожелания, замечания или идеи по улучшению летних заданий и материалов сайта – напишите их в этом разделе.
                Ваше мнение важно для нас и мы обязательно ознакомимся с каждым сообщением.
              </h3>
              <h3>
                Лилия Ильдаровна +79172667219
              </h3>
              <div className="qr-group">
                <img className="qr" src={qr_tg} alt="QR Code" />
                <img className="qr" src={qr_max} alt="QR Code" />
              </div>
              <h4>
                Единый номер экстренных служб в России — 112 <br/>
                101 — Пожарная охрана <br/>
                102 — Полиция <br/>
                103 — Скорая медицинская помощь <br/>
                104 — Аварийная служба газа <br/>
              </h4>

          </div>
      </section>
    </div>
  );
}

export default Feedback;  // ← Обязательно!
import React from "react";
import "../css/footer.css";
import * as AiIcons from 'react-icons/ai';
function Footer() {
  return (

    <div>

      <footer>

        <section class="social">

          <div class="rows">
            GitJob ©

          </div>

          <div class="rows">
            San Francisco State University |
            1600 Holloway Avenue . San Francisco . CA 94132

          </div>


          <div class="rows">

            <a className="socials" href="https://facebook.com">
              <AiIcons.AiOutlineFacebook size={30} ></AiIcons.AiOutlineFacebook>
            </a>
            <a className="socials" href="https://twitter.com">
              <AiIcons.AiOutlineTwitter size={30} ></AiIcons.AiOutlineTwitter>
            </a>
            <a className="socials" href="https://instagram.com" id="insta">
              <AiIcons.AiOutlineInstagram size={30}></AiIcons.AiOutlineInstagram>
            </a>
          </div>

        </section>

      </footer>
    </div>


  );
}

export default Footer;
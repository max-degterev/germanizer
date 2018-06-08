import React from 'react';

export default () => (
  <article className="Help-Section">
    <table className="Help-Table is-uncentered">
      <tbody>
        <tr>
          <th colSpan="4">CASES SINGULAR</th>
        </tr>
        <tr>
          <th />
          <th>1ST</th>
          <th>2ND</th>
          <th>3RD</th>
        </tr>
        <tr>
          <td className="Help-Label"><strong>NOM</strong></td>
          <td>ich<span>I</span></td>
          <td>du<span>you</span></td>
          <td>er/sie/es<span>he/she/it</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>ACC</strong></td>
          <td>mich<span>me</span></td>
          <td>dich<span>you</span></td>
          <td>ihn/sie/es<span>him/her/it</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>DAT</strong></td>
          <td>mir<span>me</span></td>
          <td>dir<span>you</span></td>
          <td>ihm/ihr/ihm<span>him/her/it</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>GEN</strong></td>
          <td>meiner<span>my/mine</span></td>
          <td>deiner<span>yours</span></td>
          <td>seiner/ihrer/seiner<span>his/her(s)/its</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>POSS</strong></td>
          <td>mein<span>my</span></td>
          <td>dein<span>your</span></td>
          <td>sein/ihr/sein<span>his/her/its</span></td>
        </tr>
      </tbody>
    </table>

    <table className="Help-Table is-uncentered">
      <tbody>
        <tr>
          <th colSpan="5">CASES PLURAL / FORMAL</th>
        </tr>
        <tr>
          <th />
          <th>1ST</th>
          <th>2ND</th>
          <th>3RD</th>
          <th>2ND</th>
        </tr>
        <tr>
          <td className="Help-Label"><strong>NOM</strong></td>
          <td>wir<span>we</span></td>
          <td>ihr<span>you</span></td>
          <td>sie<span>they</span></td>
          <td>Sie<span>they</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>ACC</strong></td>
          <td>uns<span>us</span></td>
          <td>euch<span>you</span></td>
          <td>sie<span>them</span></td>
          <td>Sie<span>them</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>DAT</strong></td>
          <td>uns<span>us</span></td>
          <td>euch<span>you</span></td>
          <td>ihnen<span>them</span></td>
          <td>Ihnen<span>them</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>GEN</strong></td>
          <td>unser<span>our(s)</span></td>
          <td>euer<span>your(s)</span></td>
          <td>ihrer<span>their(s)</span></td>
          <td>Ihrer<span>their(s)</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>POSS</strong></td>
          <td>unser<span>our</span></td>
          <td>euer/eure<span>your</span></td>
          <td>ihr<span>their</span></td>
          <td>Ihr<span>their</span></td>
        </tr>
      </tbody>
    </table>
  </article>
);

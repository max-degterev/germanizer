import React from 'react';

export default () => (
  <article className="Help-Section">
    <table className="Help-Table">
      <tbody>
        <tr>
          <th colSpan="4">REFLEXIVE SINGULAR</th>
        </tr>
        <tr>
          <th />
          <th>1ST</th>
          <th>2ND</th>
          <th>3RD</th>
        </tr>
        <tr>
          <td className="Help-Label"><strong>ACC</strong></td>
          <td>mich</td>
          <td>dich</td>
          <td rowSpan="2">sich<span>him-/her-/itself</span></td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>DAT</strong></td>
          <td>mir<span>myself</span></td>
          <td>dir<span>yourself</span></td>
        </tr>
      </tbody>
    </table>

    <table className="Help-Table">
      <tbody>
        <tr>
          <th colSpan="5">REFLEXIVE PLURAL / FORMAL</th>
        </tr>
        <tr>
          <th />
          <th>1ST</th>
          <th>2ND</th>
          <th>3RD</th>
          <th>2ND</th>
        </tr>
        <tr>
          <td className="Help-Label"><strong>ACC/DAT</strong></td>
          <td>uns<span>ourselves</span></td>
          <td>euch<span>yourselves</span></td>
          <td>sich<span>themselves</span></td>
          <td>sich<span>yourself/yourselves</span></td>
        </tr>
      </tbody>
    </table>
  </article>
);

import React from 'react';

export default () => (
  <article className="Help-Section">
    <table className="Help-Table">
      <tbody>
        <tr>
          <th />
          <th>Masculine</th>
          <th>Feminine</th>
          <th>Neuter</th>
          <th>Plural</th>
        </tr>
        <tr>
          <td className="Help-Label"><strong>NOM</strong>(subject)</td>
          <td>der</td>
          <td>die</td>
          <td>das</td>
          <td>die</td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>ACC</strong>(direct object)</td>
          <td>den</td>
          <td>die</td>
          <td>das</td>
          <td>die</td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>DAT</strong>(indirect object)</td>
          <td>dem</td>
          <td>der</td>
          <td>dem</td>
          <td>den + -n (ending)</td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>GEN</strong>(possession)</td>
          <td>des + -s (ending)</td>
          <td>der</td>
          <td>des + -s (ending)</td>
          <td>der</td>
        </tr>
      </tbody>
    </table>
  </article>
);

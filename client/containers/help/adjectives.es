import React from 'react';

export default () => (
  <article className="Help-Section">
    <table className="Help-Table is-compact">
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
          <td>
            <p>der -e</p>
            <p>ein -er</p>
            <p>-er</p>
          </td>
          <td>
            <p>die -e</p>
            <p>eine -e</p>
            <p>-e</p>
          </td>
          <td>
            <p>das -e</p>
            <p>ein -es</p>
            <p>-es</p>
          </td>
          <td>
            <p>die -en</p>
            <p>meine -en</p>
            <p>-e</p>
          </td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>ACC</strong>(direct object)</td>
          <td>
            <p>den -en</p>
            <p>einen -en</p>
            <p>-en</p>
          </td>
          <td>
            <p>die -e</p>
            <p>eine -e</p>
            <p>-e</p>
          </td>
          <td>
            <p>das -e</p>
            <p>ein -es</p>
            <p>-es</p>
          </td>
          <td>
            <p>die -en</p>
            <p>meine -en</p>
            <p>-e</p>
          </td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>DAT</strong>(indirect object)</td>
          <td>
            <p>dem -en</p>
            <p>einem -en</p>
            <p>-em</p>
          </td>
          <td>
            <p>der -en</p>
            <p>einer -en</p>
            <p>-er</p>
          </td>
          <td>
            <p>dem -en</p>
            <p>einem -en</p>
            <p>-em</p>
          </td>
          <td>
            <p>den -en + -n</p>
            <p>meinen -en + -n</p>
            <p>-en + -n</p>
          </td>
        </tr>
        <tr>
          <td className="Help-Label"><strong>GEN</strong>(possession)</td>
          <td>
            <p>des -en + -s</p>
            <p>eines -en + -es</p>
            <p>-en + -s</p>
          </td>
          <td>
            <p>der -en</p>
            <p>einer -en</p>
            <p>-er</p>
          </td>
          <td>
            <p>des -en + -s</p>
            <p>eines -en + -es</p>
            <p>-en + -s</p>
          </td>
          <td>
            <p>der -en</p>
            <p>meiner -en</p>
            <p>-er</p>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
);

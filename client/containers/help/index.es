import React from 'react';
import Layout from '../../components/layout';

const Help = () => (
  <Layout classNameName="Help">
    <article classNameName="Help-Content">
      <h1>Help</h1>

      <table className="ui-tip-table is-uncentered">
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
          <td className="ui-tip-label"><strong>NOM</strong></td>
          <td>ich<span>I</span></td>
          <td>du<span>you</span></td>
          <td>er / sie / es<span>he / she / it</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>ACC</strong></td>
          <td>mich<span>me</span></td>
          <td>dich<span>you</span></td>
          <td>ihn / sie / es<span>him / her / it</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>DAT</strong></td>
          <td>mir<span>me</span></td>
          <td>dir<span>you</span></td>
          <td>ihm / ihr / ihm<span>him / her / it</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>GEN</strong></td>
          <td>meiner<span>my/mine</span></td>
          <td>deiner<span>yours</span></td>
          <td>seiner / ihrer / seiner<span>his / her(s) / its</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>POSS</strong></td>
          <td>mein<span>my</span></td>
          <td>dein<span>your</span></td>
          <td>sein / ihr / sein<span>his / her / its</span></td>
        </tr>
      </table>

      <table className="ui-tip-table is-uncentered">
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
          <td className="ui-tip-label"><strong>NOM</strong></td>
          <td>wir<span>we</span></td>
          <td>ihr<span>you</span></td>
          <td>sie<span>they</span></td>
          <td>Sie<span>they</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>ACC</strong></td>
          <td>uns<span>us</span></td>
          <td>euch<span>you</span></td>
          <td>sie<span>them</span></td>
          <td>Sie<span>them</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>DAT</strong></td>
          <td>uns<span>us</span></td>
          <td>euch<span>you</span></td>
          <td>ihnen<span>them</span></td>
          <td>Ihnen<span>them</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>GEN</strong></td>
          <td>unser<span>our(s)</span></td>
          <td>euer<span>your(s)</span></td>
          <td>ihrer<span>their(s)</span></td>
          <td>Ihrer<span>their(s)</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>POSS</strong></td>
          <td>unser<span>our</span></td>
          <td>euer/eure<span>your</span></td>
          <td>ihr<span>their</span></td>
          <td>Ihr<span>their</span></td>
        </tr>
      </table>
      <table className="ui-tip-table">
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
          <td className="ui-tip-label"><strong>ACC</strong></td>
          <td>mich</td>
          <td>dich</td>
          <td rowSpan="2">sich<span>him- / her- / itself</span></td>
        </tr>
        <tr>
          <td className="ui-tip-label"><strong>DAT</strong></td>
          <td>mir<span>myself</span></td>
          <td>dir<span>yourself</span></td>
        </tr>
      </table>
      <table className="ui-tip-table">
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
          <td className="ui-tip-label"><strong>ACC/DAT</strong></td>
          <td>uns<span>ourselves</span></td>
          <td>euch<span>yourselves</span></td>
          <td>sich<span>themselves</span></td>
          <td>sich<span>yourself / yourselves</span>
            <table className="ui-tip-table">
              <tr>
                <th />
                <th>Masculine</th>
                <th>Feminine</th>
                <th>Neuter</th>
                <th>Plural</th>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>NOM</strong>(subject)</td>
                <td>der</td>
                <td>die</td>
                <td>das</td>
                <td>die</td>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>ACC</strong>(direct object)</td>
                <td>den</td>
                <td>die</td>
                <td>das</td>
                <td>die</td>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>DAT</strong>(indirect object)</td>
                <td>dem</td>
                <td>der</td>
                <td>dem</td>
                <td>den + -n (ending)</td>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>GEN</strong>(possession)</td>
                <td>des + -s (ending)</td>
                <td>der</td>
                <td>des + -s (ending)</td>
                <td>der</td>
              </tr>
            </table>

            <table className="ui-tip-table is-compact">
              <tr>
                <th />
                <th>Masculine</th>
                <th>Feminine</th>
                <th>Neuter</th>
                <th>Plural</th>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>NOM</strong>(subject)</td>
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
                  <p>eine -en</p>
                  <p>-e</p>
                </td>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>ACC</strong>(direct object)</td>
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
                  <p>eine -en</p>
                  <p>-e</p>
                </td>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>DAT</strong>(indirect object)</td>
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
                  <p>einen -en + -n</p>
                  <p>-en + -n</p>
                </td>
              </tr>
              <tr>
                <td className="ui-tip-label"><strong>GEN</strong>(possession)</td>
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
                  <p>einer -en</p>
                  <p>-er</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </article>
  </Layout>
);

export default Help;

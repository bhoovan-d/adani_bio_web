import { LedgerNote } from "@/components/LedgerNote";
import { InlineFigure } from "@/components/InlineFigure";

/**
 * Volume I · Post 1 — The Foundation & The Man.
 * Facts drawn from the public record; framing is editorial.
 * Written as the sample Post; replace or extend freely.
 */
export default function Content() {
  return (
    <>
      <p>
        In 1978, a teenager stepped off a train in Bombay with almost nothing and
        took a job sorting diamonds. He was sixteen. Four and a half decades
        later, the ports his companies operate handle a quarter of India&rsquo;s
        sea cargo, the power they generate lights millions of homes, and the name
        on the gate &mdash; Adani &mdash; has become shorthand for the physical
        infrastructure of a rising nation. The distance between those two facts is
        the subject of this series. It begins, as these stories tend to, with a
        man and the idea he could not let go of.
      </p>

      <h2>
        <span className="section-index">Early Life &amp; Origins</span>
        A merchant&rsquo;s son in Ahmedabad
      </h2>

      <p>
        Gautam Shantilal Adani was born on 24 June 1962 in Ahmedabad, Gujarat,
        into a Gujarati Jain family of modest means. His father, Shantilal, was a
        textile trader; Gautam grew up one of several siblings in a household where
        commerce was the family language long before it was a career. He enrolled
        to study commerce at Gujarat University but left before finishing &mdash; a
        detail that later biographers would treat as the first sign of a
        temperament that preferred the market to the classroom.
      </p>

      <LedgerNote
        value="1988"
        label="Adani Exports founded"
        detail="The commodity-trading firm that would later become Adani Enterprises — the group's holding company and incubator."
      />

      <p>
        The move to Bombay was the real education. Sorting diamonds for a
        brokerage taught him grading, margins, and the rhythm of a trading floor;
        within a couple of years he had set up on his own at Zaveri Bazaar and, by
        his own telling, earned his first lakh before he was twenty. When his elder
        brother bought a plastics unit back in Ahmedabad in the early 1980s, Gautam
        returned to run its imports, moving into PVC and polymers. Trading was the
        through-line: buy access, manage risk, refinance, repeat.
      </p>

      <p>
        In <strong>1988</strong> he formalised the instinct, founding Adani
        Exports Limited to trade agricultural and power commodities. The timing was
        fortunate. India&rsquo;s 1991 liberalisation swung open doors that had been
        bolted for a generation, and a trader who understood imports and exports
        was suddenly standing in the right doorway. But the decisive turn was not a
        commodity at all. It was a stretch of salt-flat coastline in Gujarat.
      </p>

      <LedgerNote
        value="1995"
        label="Mundra Port begins"
        detail="Developed from Gujarat coastline into India's largest commercial port — the asset that turned a trader into an infrastructure group."
      />

      <p>
        Beginning in <strong>1995</strong>, Adani took on the development of a port
        at Mundra. It was a bet on a simple thesis: a trading nation needs gateways,
        and whoever owns the gateway owns a toll on everything that passes through.
        Mundra grew into the largest commercial port in the country. More
        importantly, it revealed the pattern that would define everything after
        &mdash; the group would stop merely moving goods and start owning the
        arteries they moved through. That logic, the move from trader to
        infrastructure-owner, is the engine we take apart in Volume II.
      </p>

      <InlineFigure
        src="photo-1516467716199-ed21929a932e"
        alt="Gantry cranes silhouetted against a violet dusk sky at a container terminal."
        caption="The gateway logic: own the crane, and you own a toll on everything that moves through the port."
        ratio="3 / 2"
      />

      <h2>
        <span className="section-index">Weathering the Storm</span>
        The report, and what came after
      </h2>

      <p>
        No account of the group is honest without the winter of 2023. In January,
        the short-seller Hindenburg Research published a report alleging stock
        manipulation and accounting irregularities across Adani companies. The
        market reaction was severe: group stocks sold off sharply, and, at the
        low, well over a hundred billion dollars of market value evaporated in a
        matter of weeks. A planned share sale was pulled at the last moment.
      </p>

      <blockquote>
        The test of an empire is not whether it is attacked, but what it looks
        like on the other side of the attack.
      </blockquote>

      <p>
        The group rejected the allegations in full, calling the report a
        calculated attack and defending its disclosures. What followed was less a
        rebuttal than a demonstration of financial footing: promoters prepaid
        pledged-share loans to reassure lenders, a large strategic investment from
        the U.S.-based GQG Partners arrived within weeks, and, over the following
        months, several of the group&rsquo;s listed companies clawed back much of
        the lost ground. Whatever one&rsquo;s reading of the controversy &mdash;
        and the arguments are still live &mdash; the episode became part of the
        story the group tells about itself: pressure applied, pressure survived.
      </p>

      <h2>
        <span className="section-index">Giving Back</span>
        The Foundation and the pledge
      </h2>

      <p>
        Away from the balance sheet runs a parallel record. The Adani Foundation,
        established in 1996 and chaired by Priti Adani, works across education,
        healthcare, rural development, and nutrition, reaching communities in
        thousands of villages. On his sixtieth birthday in 2022, Gautam Adani
        pledged ₹60,000 crore toward philanthropy &mdash; earmarked for
        healthcare, education, and skill development &mdash; one of the largest
        such commitments India has seen.
      </p>

      <LedgerNote
        value="₹60,000 cr"
        label="2022 philanthropy pledge"
        detail="Committed on Gautam Adani's 60th birthday toward healthcare, education, and skill development."
      />

      <p>
        Read generously, the giving is of a piece with the building: both are bets
        on a country&rsquo;s trajectory, made at scale, with the founder&rsquo;s
        name attached. Read skeptically, philanthropy at this size is also
        reputation infrastructure. This series will hold both readings at once,
        because the interesting thing about Adani is rarely the simple version.
      </p>

      <p>
        What we have established here is the foundation and the man: a trader&rsquo;s
        instinct, a gateway asset, and a temperament that treats a setback as a
        chapter rather than an ending. What we take apart next is the machine that
        turned that instinct into a conglomerate &mdash; the incubation model, the
        leverage, and the discipline of the ratios.
      </p>
    </>
  );
}

import {
  A,
  Blockquote,
  Code,
  Em,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Pre,
  Small,
  Strong,
  Sub,
  Sup,
} from "@/components/ui/typography";

export default function TypographyPlayground() {
  // Available variants to showcase
  const variants = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "black",
    "white",
  ] as const;

  return (
    <div className="container py-10">
      <div className="mb-8">
        <H1 className="mb-2">Typography</H1>
        <P className="text-muted-foreground">
          Preview of all typography styles and classes.
        </P>
      </div>
      <div className="space-y-12">
        <section>
          <H2 className="mb-4">Headings</H2>
          <div className="space-y-2">
            <H1>h1. Heading 1</H1>
            <H2>h2. Heading 2</H2>
            <H3>h3. Heading 3</H3>
            <H4>h4. Heading 4</H4>
            <H5>h5. Heading 5</H5>
            <H6>h6. Heading 6</H6>
          </div>
        </section>

        <section>
          <H2 className="mb-4">Paragraph & Lead</H2>
          <P className="mb-2">
            This is a normal paragraph of text. It uses the default text color
            and size.
          </P>
          <P className="text-muted-foreground mb-2 text-lg">
            This is a lead paragraph. Use{" "}
            <Code>text-lg text-muted-foreground</Code> for lead text.
          </P>
        </section>

        <section>
          <H2 className="mb-4">Emphasis & Strong</H2>
          <P className="mb-2">
            This text has <Em>emphasized</Em> content and{" "}
            <Strong>strong</Strong> content.
          </P>
          <P className="mb-2">
            You can also use <Sub>subscript</Sub> and <Sup>superscript</Sup>{" "}
            elements.
          </P>
        </section>

        <section>
          <H2 className="mb-4">Muted & Small</H2>
          <P className="text-muted-foreground mb-2">
            This is muted text using <Code>text-muted-foreground</Code>.
          </P>
          <Small className="mb-2 block">
            This is small text using the Small component.
          </Small>
        </section>

        <section>
          <H2 className="mb-4">Code & Blockquote</H2>
          <Code className="bg-muted mb-2 block rounded px-2 py-1">
            const hello = &quot;world&quot;;
          </Code>
          <Pre className="bg-muted mb-2 block rounded px-2 py-1">
            {`function example() {
  return "This is a pre element";
}`}
          </Pre>
          <Blockquote className="border-primary text-muted-foreground mb-2 border-l-4 pl-4">
            This is a blockquote. Use{" "}
            <Code>
              border-l-4 border-primary pl-4 italic text-muted-foreground
            </Code>
            .
          </Blockquote>
        </section>

        <section>
          <H2 className="mb-4">Links</H2>
          <A
            href="#"
            className="text-primary hover:text-primary/80 underline">
            This is a link
          </A>
        </section>

        <section>
          <H2 className="mb-6">Variants</H2>
          <div className="space-y-8">
            <div>
              <H3 className="mb-3">H1 Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <H1
                    key={`h1-${variant}`}
                    variant={variant}>
                    Aa
                  </H1>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">H2 Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <H2
                    key={`h2-${variant}`}
                    variant={variant}>
                    Aa
                  </H2>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">P Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <P
                    key={`p-${variant}`}
                    variant={variant}>
                    Text
                  </P>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">Small Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <Small
                    key={`small-${variant}`}
                    variant={variant}>
                    Small
                  </Small>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">Code Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <Code
                    key={`code-${variant}`}
                    variant={variant}>
                    code
                  </Code>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">Blockquote Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <Blockquote
                    key={`blockquote-${variant}`}
                    variant={variant}>
                    Quote
                  </Blockquote>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">Strong Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <Strong
                    key={`strong-${variant}`}
                    variant={variant}>
                    Strong
                  </Strong>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">Em Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <Em
                    key={`em-${variant}`}
                    variant={variant}>
                    Emphasis
                  </Em>
                ))}
              </div>
            </div>

            <div>
              <H3 className="mb-3">Link Variants</H3>
              <div className="flex flex-wrap gap-2">
                {variants.map((variant) => (
                  <A
                    key={`a-${variant}`}
                    href="#"
                    variant={variant}>
                    Link
                  </A>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

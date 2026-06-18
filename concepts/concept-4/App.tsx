import { Flex, Section } from "layout";
import {
  Button,
  ButtonGroup,
  Tag,
  Text,
  TextContentHeading,
  TextContentTitle,
} from "primitives";

/**
 * Concept 04 — isolated low-fi sandbox.
 *
 * RULES: build only from SDS components, tokens, and layout primitives.
 * See /design.md (repo root) for the full, enforceable rule set.
 * Do not hardcode colors, spacing, radii, or typography — use SDS tokens.
 */
export default function App() {
  return (
    <Flex direction="column">
      <Section padding="1600" variant="brand">
        <Flex direction="column" gap="400" alignPrimary="center">
          <Tag>Concept 04</Tag>
          <TextContentTitle
            align="center"
            title="Concept 04"
            subtitle="Isolated low-fi sandbox — built only with the SDS design system"
          />
          <ButtonGroup align="center">
            <Button variant="primary">Primary action</Button>
            <Button variant="neutral">Secondary</Button>
          </ButtonGroup>
        </Flex>
      </Section>

      <Section padding="1600">
        <Flex direction="column" gap="600">
          <TextContentHeading
            heading="Start experimenting"
            subheading="Compose SDS primitives, compositions, and layout components here."
          />
          <Text>
            This is the concept-04 environment. Replace this section with your
            concept. Import from <code>primitives</code>, <code>compositions</code>,
            <code> layout</code>, and <code>icons</code>, and style only with SDS
            tokens. If SDS is missing something, stop and ask — see design.md.
          </Text>
        </Flex>
      </Section>
    </Flex>
  );
}

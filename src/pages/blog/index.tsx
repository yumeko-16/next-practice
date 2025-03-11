import Meta from '@/components/meta';
import Container from '@/components/container';
import Hero from '@/components/hero';

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="Blog" pageDesc="Blog article list" />

      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
}

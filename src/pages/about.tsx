import Meta from '@/components/meta';
import Container from '@/components/container';
import Hero from '@/components/hero';
import PostBody from '@/components/post-body';
import Contact from '@/components/contact';
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from '@/components/two-column';
import Image from 'next/image';
import eyecatch from '@/images/about.jpg';

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="About"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h2>
              見出し２見出し２見出し２見出し２見出し２見出し２見出し２見出し２見出し２見出し２見出し２見出し２
            </h2>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
            <h3>
              見出し３見出し３見出し３見出し３見出し３見出し３見出し３見出し３見出し３見出し３見出し３見出し３
            </h3>
            <p>
              ダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミーダミー
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

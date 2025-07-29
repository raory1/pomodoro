import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { ToggleTheme } from '../../components/ToggleTheme';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <ToggleTheme />
        <Logo />
        <Menu />
      </Container>

      {children}

      <Footer />
    </>
  );
}

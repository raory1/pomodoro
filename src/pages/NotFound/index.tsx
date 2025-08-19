import { Link } from 'react-router';
import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useEffect } from 'react';

export function NotFound() {
  useEffect(() => {
    document.title = 'Page not found | pomo timer';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Page Not Found</Heading>
          <p>
            Oops! It looks like the page you’re trying to access doesn’t exist.
            But don’t worry, you’re not lost in space (yet). You can safely
            return to the <Link to="/">main page</Link>.
          </p>
          <p>
            If you believe this page should exist, just get in{' '}
            <a href="#">contact</a>. Otherwise, use the menu to get back on
            track.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

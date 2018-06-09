import Link from 'next/link'
import Head from 'next/head'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
} from 'reactstrap'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

export default (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <title>{props.title || 'Now IPFS'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content={props.description || defaultDescription} />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />

      <script src="https://wzrd.in/standalone/buffer"></script>
      <script src="https://unpkg.com/ipfs-api@9.0.0/dist/index.js" integrity="sha384-5bXRcW9kyxxnSMbOoHzraqa7Z0PQWIao+cgeg327zit1hz5LZCEbIMx/LWKPReuB" crossorigin="anonymous"></script>
    </Head>

    <Navbar color="light" light expand="md">
      <Link href="/">
        <NavbarBrand href="#">Now IPFS</NavbarBrand>
      </Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link href="https://github.com/colkito/now-ipfs">
            <NavLink href="#">GitHub</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>

    <Container className="mt-3">
      <Row>
        <Col sm="12">
          { props.children }
        </Col>
      </Row>
    </Container>
    <style jsx global>{`
      body {
        color: #404b55;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
  </div>
)

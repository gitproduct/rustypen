import Head from 'next/head'

const index = (props) => {
  const {title, desc} = props;
  return ( <>
    <Head>
      <title>{title}</title>
      <link rel="canonical" href="https://rustypen.com/" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow"/>
    </Head>
  </> );
}
 
export default index;
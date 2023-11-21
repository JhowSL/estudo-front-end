import { Card, Layout } from '@/components/index';

const App = () => {
  return (
    <Layout>
      Hello World

      <Card id={1}
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
      />


      <Card id={2}
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
      />


      <Card id={3}
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
      />

    </Layout>

  )
}

export default App;
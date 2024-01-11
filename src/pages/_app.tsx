

import { Card } from "@/components/Card/Card";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";


function App() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App;
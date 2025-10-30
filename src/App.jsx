import { useState } from 'react'

import HeaderComponent from './assets/Component/Header/index.jsx'
import Block1Component from './assets/Component/Block1/index.jsx'
import Block2Component from './assets/Component/Block2/index.jsx'
import Block3Component from './assets/Component/Block3/index.jsx'
import Block4Component from './assets/Component/Block4/index.jsx'
import Block5Component from './assets/Component/Block5/index.jsx'
import Block6Component from './assets/Component/Block6/index.jsx'
import Block7Component from './assets/Component/Block7/index.jsx'
import Block8Component from './assets/Component/Block8/index.jsx'
import Block9Component from './assets/Component/Block9/index.jsx'
import Block10Component from './assets/Component/Block10/index.jsx'
import FooterComponent from './assets/Component/Footer/index.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Block1Component></Block1Component>
      <Block2Component></Block2Component>
      <Block3Component></Block3Component>
      <Block4Component></Block4Component>
      <Block5Component></Block5Component>
      <Block6Component></Block6Component>
      <Block7Component></Block7Component>
      <Block8Component></Block8Component>
      <Block9Component></Block9Component>
      <Block10Component></Block10Component>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App

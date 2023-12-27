import React from 'react'
import { Dropdown, Menu , Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="Right" src="https://avatars.githubusercontent.com/u/24763981?v=4"/>
            <Dropdown pointing="top" inline text='Furkan'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
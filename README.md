### Projeto de Gerenciamento de Serviços de Leito

###### Criação dos arquivos de configuração:
.editorconfig
package.json
.eslintrc.json
.http

```
PS C:\Users\david.silva\Desktop\gestao-servicos-leitos> yarn init
yarn init v1.22.21
question name (gestao-servicos-leitos):
question version (1.0.0):
question description: Sistema para gerenciamento dos serviços de leito. Limpeza terminal e concorrente, interdição, rouparia entre outros.
question entry point (index.js):
question repository url (https://github.com/tecnicoroot/gestao-servicos-leitos.git):
question author (David Luis da Silva <tecnicoroot@gmail.com>):
question license (MIT):
question private: true
success Saved package.json
Done in 202.89s.
```

```
PS C:\Users\david.silva\Desktop\gestao-servicos-leitos> npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JSON
√ What style of indentation do you use? · 4
√ What quotes do you use for strings? · single
√ What line endings do you use? · unix
√ Do you require semicolons? · No / Yes
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · yarn
Installing @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest, eslint@latest
```

##### Instalação dos pacotes
```
yarn add express http-status-codes
yarn add -D typescript @types/express ts-node-dev
```
##### Estrutura de pastas e arquivos iniciais.
<p> Lista de arquivos criados e/ou alterados <p>

```
C:.
|   .editorconfig
|   .eslintrc.json
|   .gitignore
|   .http
|   package.json
|   README.md
|   yarn.lock
|
\---src
    |   index.ts
    |
    \---server
        |   Server.ts
        |
        \---routes
                index.ts
```


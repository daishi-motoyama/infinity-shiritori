---
name: 'page'
root: '.'
output: 'src/pages'
ignore: ['.']
questions:
dir: 'ディレクトリ名を入力して下さい ex( example/dir )'
name: 'ページ名を入力して下さい  ex( ExamplePage )'
---

# `{{ inputs.dir }}/index.page.tsx`

```
import { NextPageWithLayout } from 'next'

import { {{ inputs.name | pascal }}Content } from '@{{ output.dir }}/index.content'

const {{ inputs.name | pascal }}: NextPageWithLayout = () => {
  return <{{ inputs.name | pascal }}Content />
}

export default {{ inputs.name | pascal }}

```

# `{{ inputs.dir }}/index.content.tsx`

```
export const {{ inputs.name | pascal }}Content = () => {
  return (
    <BaseLayout>
      <BaseLayout.Content>
        {{ inputs.name | pascal }}Content
      </BaseLayout.Content>
    </BaseLayout>
  )
}

```

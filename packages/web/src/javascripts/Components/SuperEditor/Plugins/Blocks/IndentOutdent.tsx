import { INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND, LexicalEditor } from 'lexical'

export function GetIndentOutdentBlocks(editor: LexicalEditor) {
  return [
    {
      name: 'Indent',
      iconName: 'arrow-right',
      keywords: ['indent'],
      onSelect: () => editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined),
    },
    {
      name: 'Outdent',
      iconName: 'arrow-left',
      keywords: ['outdent'],
      onSelect: () => editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined),
    },
  ]
}

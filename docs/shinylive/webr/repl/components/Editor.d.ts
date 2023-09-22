import React from 'react';
import { WebR } from '../../webR/webr-main';
import { EditorState } from '@codemirror/state';
import { FilesInterface, TerminalInterface } from '../App';
import './Editor.css';
export type EditorFile = {
    name: string;
    path: string;
    ref: {
        editorState: EditorState;
        scrollTop?: number;
        scrollLeft?: number;
    };
};
export declare function FileTabs({ files, activeFileIdx, setActiveFileIdx, closeFile }: {
    files: EditorFile[];
    activeFileIdx: number;
    setActiveFileIdx: React.Dispatch<React.SetStateAction<number>>;
    closeFile: (e: React.SyntheticEvent, index: number) => void;
}): React.JSX.Element;
export declare function Editor({ webR, terminalInterface, filesInterface, }: {
    webR: WebR;
    terminalInterface: TerminalInterface;
    filesInterface: FilesInterface;
}): React.JSX.Element;
export default Editor;

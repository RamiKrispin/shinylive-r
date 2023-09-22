import { Readline } from 'xterm-readline';
import './App.css';
export interface TerminalInterface {
    println: Readline['println'];
    read: Readline['read'];
    write: Readline['write'];
}
export interface FilesInterface {
    refreshFilesystem: () => Promise<void>;
    openFileInEditor: (name: string, path: string, readOnly: boolean) => Promise<void>;
}
export interface PlotInterface {
    newPlot: () => void;
    drawImage: (img: ImageBitmap) => void;
}

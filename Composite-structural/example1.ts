export {};

interface FileSystemComponent {
  printFiles(): void;
}

class File implements FileSystemComponent {
  fileName: string;
  constructor(name: string) {
    this.fileName = name;
  }
  printFiles(): void {
    console.log(`file name:-${this.fileName}`);
  }
}

class Directory implements FileSystemComponent {
  directoryName: string;
  fileSystemComponents: FileSystemComponent[];
  constructor(name: string) {
    this.directoryName = name;
    this.fileSystemComponents = [];
  }

  addFile(c: FileSystemComponent) {
    this.fileSystemComponents.push(c);
  }

  printFiles(): void {
    console.log(this.directoryName);
    this.fileSystemComponents.forEach((e) => {
      e.printFiles();
    });
  }
}

const file = new File("file1");
const file2 = new File("file2");
const dir = new Directory("dir1");

const dir2 = new Directory("dir2");
const file3 = new File("file3");
dir2.addFile(file3);

dir.addFile(file);
dir.addFile(file2);
dir.addFile(dir2);

dir.printFiles();

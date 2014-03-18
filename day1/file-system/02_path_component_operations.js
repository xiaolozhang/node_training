path.dirname('/foo/bar/baz/asdf/quux.txt');
// '/foo/bar/baz/asdf'

path.basename('/foo/bar/baz/asdf/quux.txt');
// 'quux.txt'

path.basename('/foo/bar/baz/asdf/quux.txt', '.txt');
// 'quux'

path.extname('/foo/bar/baz/asdf/');
// ''

path.extname('/foo/bar/baz/asdf/quux.txt');
// '.txt'
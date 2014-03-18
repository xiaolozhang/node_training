// Run these in the repl

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// '/foo/bar/baz/asdf'

path.normalize('/foo/bar//baz/asdf/quux/..');
// '/foo/bar/baz/asdf'

path.resolve('/foo/bar', './baz');
// '/foo/bar/baz'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// '/Users/tmpvar/wwwroot/static_files/gif/image.gif'

path.relative('/path/to/test', '/path/to/foo');
// '../foo'
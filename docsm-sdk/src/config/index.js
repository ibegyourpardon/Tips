const Config = {
  languageMap: {
    zh_CN: '中文（中国）',
    en_US: '英文（澳新）',
    ja_JP: '日文',
    es_MX: '西班牙文（墨西哥）',
    pt_BR: '葡萄牙文（巴西）',
  },
  server: 'http://127.0.0.1:8081',
  language: 'zh_CN',
  currentUsername: '',
  closeImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVQ4T62Tvw6CMBDGC1w3BgeNg09EAoRZo4kMPpQDLOrCBiQ8kYPRxRG9a8wlkKApGKkd78+vX7/rWcLwWIb94r+AKIomdV3LqqquOmWe581c131kWXZv828KgiCYAsCJiNZ5nl+6EN/3F1LKFBGXRVHctAAOhmE4t207QcRdWZZnjnEzAOyVUvEnWOsBK3Ec54iIMQMAICGiVffmXgVtooEchBBPItrqmrm2dwoNIOWinwFGTxgwMVFKbQZNNB4jfyQigj7Dvn6kMXvx310Yo+AFc3SBEZZabuAAAAAASUVORK5CYII=',
  editImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHDUlEQVR4Xu1ba4wUVRb+TnXdmkFB0EjUoatdlKGr1WgMmuiKI+Kuru4C0WTVqDFRE6PGtyaa6Loan6j4yioa3T+b3Y26i6/IQiI6PjAaFfGBdA2jAlWDoKiDDDtA3ao6ph/TU/T0o6qHabpDz7+Ze8+95/vOd8591RD28h/ay/GjRUBLAXs5A60UaHYB2HEcMAgxzQfvI6S7etr3+CEKpqZVwBpd7fJA84nohCHADHaI8XKM6O5Oy/kqDBFNR0Av0Obp4hEQXVUOIDMPKj7PTW5w36xGQlMRkAe/HETH7QKM0Zf9nRAv/J15O5hOMPqcLyqR0DQErP0N2nd62osgzClInvlDgv9A0vYWE+CuicfO8RXl3wC15fusjVlOqhPYWY6EigQwIHqmxOZBoRSTEqsmp9G0xzzv4+kbvMWlxviuA/tsVcUbAP02EOGnk7a8lgAZtDH12DxQ7JVhkvybU7a7IDIBmw7Cvls08fYIuY0GZRlbBq/0tsuuozZjW3EXO45x20gsJaKu4Ta+wbDkY+VcMXXxdxBdmmvnzwxLHhuZgLQuFhDRjWOAtyh9eaU2IE89vB+/FM/1zf6YKMeLZbsGoTL4zBg9U9TTOKYsy+Fnz7ClGp2AhPiUQFnmmDmzpPy4+8mgn7VtziWlwK+dhEk7JojlRHTk0LzE/k1J232kmh/puHYBKfhXXgEDhiX3i0yAmdC+AXBYxpDYOztpe4W8qubAaNtzBU+8C6LjA7l8W8p276s2NgNk6uLtoZRh5g9TtjyxaQhYBWhqQiwBaHbA6fmG5dxaDXxW/nH1DlaUuwrEga9IWfKZpiCAAbVH114H4YyCw8zPGLa8Igz4dEK7i4A7ArafJ205gwCv4QnIg38puM6DeaFhy7I7viCotK7eRKQ8HIh8v+rJozs35DdJZRgouw+oZw3I7DfMhPYyAX8c9pOfMCx5XZjImwlxPUCPDtcLfM2K03XEemysZr/HCchHfhEIcwPSfcyw5Q3VnM+0j4g8Y02b65x+2EasD2O/RwkoDd6/3bDde8M4n9bVm4mUhwLEfTGO5KxDLfSHsc+ucOU6jnUKZJc6X1sE4KyCdH2+JtUn/xbG+eKCx8Dq8b5zst6Hn8PYD/XZIwSU3OH5/i1Gn/tgGOdNXTwKousDBW9l+1Y5e+oWbAljH+xTdwLWJ7D/IIv3gjs8IELB08VTILoyIPuPJjly9sHf4/9Rwdc9BXoPxmRXiO5dwEdY6kxdPAeiywJAv23b6syoJfJ1TwHzQEzAOPEeiI6ppdqbxZEH1mnSmRW22u/RjVDmaN2vicVEdMoweP8vhu3eE0a2xTkPwFR3OqdEvQAtNdeY14DMre02RSwbOllmnWC+yrDlwjDg03HtflIQPAekxYBzYqkTZJjxivuMKQE9HTjQV7V3CDiikHMhj7TZTU5Cu5OAvxaqPaNXlc5JnZuwuRawdVXAqskYr7aL7uBlRtjzfMbRnoR6K0O5P1AvvlQd+bvdIfu6LIMjjqVc+W4u6NQI8OD3MSjPNH7EQHEUM32nW+58ArgWVYxZCqQT4hMCzcimPPjZlCUvD+Ngich/vJ8nZ3V8h8Fi+6FDUNJylIYiIL/T6wdRlmAF/u+nW27ujq7Cj6lrd4Nw+3DO86r2AXlyqXXe1MWVIHoq07fhCDDj2oVQ8M989J12RU6cug47ymHPXGP16OLJXXZ44G53u5xb6qa4V8fhHmlfD43XcASkdW0REc7JLXlYatjOmRXAKz0J8Q+ALgxU+5cM2zm33E1Ob0I70gNWNSQB2Ts9XWwB0biMg8R8ddKWT5YiIPvwomv/AWFeoNovd2152lGAU460hibAjKt/gKIsyUWfuW2H7Ji6GZuKwZS8/wN3T9op51Q72DQ2AQnxOEDX5vP/g5QlC89ZmSeuX2LqTIDOIND5IHQEIv9i0pYXFT91lVJBQxOQ1rVeIkzLCcC/TbXdBd6U2ByOxc4n8J8CD5cBbPxc0pKXh13KGpaANYcg5Qtt9TAy7gZwHEATKqx+/zUs58/Vlshge8MSMHIHVwIWc2bHtgLg15iVV1J9zpdRwGf6NiwBpp49788sUfA2Avy6wvSW7ztvpDbgp6igm0IBZkJLAzByzvIAGEsU9l/o7PNerfQ6E5WMhlVAT0KdCR+zAVo6vU+u2J2gm0IBUSNZa/+GVUCtgKLatQho5LNA1GjW0r+lgJYCGvg4XIuko9q0UqCVAvVJgeFtLfMLTGRGlepY9SfmyUNfizOzm7KlqHWu8tfiungeROfVOnAd7f5nWE7g26JoM5clIHfzKlYANDHakHXszbBZOl2pTVhX66wVvxY3D8JUatMu9it8SlPrxKOxU7KvQPytOiBfG+0jadP8v8BoCKtk2yJgrJhtlnFbCmiWSI2Vn3u9An4Fdyc2fey86DgAAAAASUVORK5CYII=',
};

export default Config;

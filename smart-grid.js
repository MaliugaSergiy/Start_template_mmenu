const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    filename: "_smart-grid",
    offset: '32px',
    outputStyle: "scss",
    container: {
        maxWidth: '1280px',
        fields: '30px'
    },
    oldSizeStyle: false,
    breakPoints: {
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        media955: {
            width: "955px"
        }
    }
};

smartgrid('./dev/sass', settings);
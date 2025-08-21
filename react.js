const heading=React.createElement(
    'h1',
    {id:'heading',xyz:'abc'},
    'hello world from react!'
);

console.log(typeof heading);

/*
<div id="parent">
    <div id="child1">
        <h1>i'm h1 tag</h1>
        <h2>i'm h1 tag</h2>
    </div>
    <div id="child2">
        <h1>i'm h1 tag</h1>
        <h2>i'm h1 tag</h2>
    </div>
</div>
*/ //creating this using react create element

const parent=React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},"i'm h1 tag "),
        React.createElement('h2',{},"i'm h2 tag ")
    ]),
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},"i'm h1 tag "),
        React.createElement('h2',{},"i'm h2 tag ")
    ])
]) //this is complex code for this little code, so we overcome thhids much complexity we use jsx

const root=ReactDOM.createRoot(document.getElementById('root'));

//root.render(heading);

root.render(parent)
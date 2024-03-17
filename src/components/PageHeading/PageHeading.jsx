import "./PageHeading.css"
const PageHeading = ({title1,title2}) => {
  return (
    <div className="pageheading">
        <div>
            {title1}
        </div>
        <h1>
            {title2}
        </h1>
    </div>
  )
}

export default PageHeading
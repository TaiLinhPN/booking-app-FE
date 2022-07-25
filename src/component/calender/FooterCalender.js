function FooterCalender(){
    return(
      <footer className="footer -dashboard py-30">
      <div className="row items-center justify-between">
        <div className="col-auto">
          <div className="text-13 lh-1">© 2022 Educrat. All Right Reserved.</div>
        </div>

        <div className="col-auto">
          <div className="d-flex items-center">
            <div className="d-flex items-center flex-wrap x-gap-20">
              <div>
                <a href="help-center.html" className="text-13 lh-1">Help</a>
              </div>
              <div>
                <a href="terms.html" className="text-13 lh-1">Privacy Policy</a>
              </div>
              <div>
                <a href="#" className="text-13 lh-1">Cookie Notice</a>
              </div>
              <div>
                <a href="#" className="text-13 lh-1">Security</a>
              </div>
              <div>
                <a href="terms.html" className="text-13 lh-1">Terms of Use</a>
              </div>
            </div>

            <button className="button -md -rounded bg-light-4 text-light-1 ml-30">English</button>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default FooterCalender
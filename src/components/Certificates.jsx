import React from "react";

function Certificates({ onOpenModal }) {


  return (
    <>
      <article className="education active" data-page="skill">
        <header>
          <h2 className="h2 article-title">Certificates</h2>
        </header>

        {/* <!-- Skills --> */}
        <section className="skill">
          <div className="title-wrapper mb-2">
            <div className="icon-box ">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3 ml-2">Certificates</h3>
          </div>
          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Scaler Data Structures & Algorithms 2024</h4>
              <span><a href="https://moonshot-assets.s3.us-west-2.amazonaws.com/generated/06152ea0423929decc16ae1820e3c875ed0b73d998ce62ee9c7fb1250ee96b59?AWSAccessKeyId=ASIAY7MGLG6ZISJEW672&Expires=1736766086&Signature=u1fZ0iu%2FV5TgNY6%2FJvPyu8sZuUc%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCa7Oqx2SzsGIaowF1vzmtuCXJ%2FDFmNwEcEgDJg8znEYQIhAPH3wplkw%2Fa9Z4fuy8VqJ%2FuqTuqqWEUwQ%2B9%2FEeO6dr2uKoAECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQAxoMNjE3MTQ2NDMxNDEwIgznXjiGhdDiakduId8q1AOxcxsgGRvrxbg1tFt%2BSE6yCKk3PiXPu9SMZ2IvJ9ScmybTp2c4PWqPHMj0MGx6jQu3qiMRUk5OqprHSTBR2RKCz%2Fsh6kaRMnDKuLSFDz5cKv5kkba3KjjY%2FBnJ4bTr39nVlg1SdF6SX%2FycwC2n9Q9mQhIFt%2BslqNtu%2BF31svqAQFR31SUwc%2BxJnTtDvX9lycl7blgSVMFMys7CGq2lSD7mxkMclfje0BlVUqPWCBU5ZpCTMTGIwoIEt9jzTq7VwSGg%2FALm6UyrQ7ttznKB6d9uD7OFn%2B8aDz9aOGZgBu0CSEvcIgkn3MRDit9YE1Sa8XFfwfxWcfWvA4LLEV3%2BW9JuVKHZLnYUYeg4fX3Qdf%2FxROSbSNhoofMLouoXus6nz3HLTZEF0oCritaTVhWIzd7F8%2FQ5ajr79yCly0xJ0fVY0h9Ge9FQ%2FsIFZU65FUBe%2B7GCRHGnpmb887dEAokhbkwTpEe%2B3ISdxVc%2BSnKNSLUV3T1vVEHqcTI1A0qoqjG2%2BvCvMpj%2FCb4l0ELTcl%2BDQKeBqmdvgD13kPSwnVFi0BDO4bY39ax71r89BD2fYEu6GbAXhJ%2FS7zBtx9wGIT%2BIM5ifULsCii%2FgeLiEyiNg6Hgecewmz2swrbmTvAY6pAHkGd%2FuArgeJZFliFtaXvs2ihmGN%2FwbGR2DJ1pv7oqmnSYaiXHckjUbMrfZCBTmcEGhQlG2aQluZG02MGmL7pLqWAMkSueZV5ZvCflvPeZne3L8fmGUl8DFBK51IFmk%2BvA1vBu2AZoOLvq2wryWwYW75Iyz1S6spWNJ2zS%2BjoaOxDpC1mEEnv2dGB9bEzery1gvUxCE7cKJ5jJR5SA0IioghBhsjg%3D%3D" target="_blank">Certificate</a></span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HackerRank certificate React (Basic) 2023</h4>
              <span><a href="https://www.hackerrank.com/certificates/fa5a5ea80549" target="_blank">Certificate</a></span>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HackerRank certificate Problem-Solving (Basic) 2021</h4>
              <span><a href="https://www.hackerrank.com/certificates/c02b30e2c279" target="_blank">Certificate</a></span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HackerRank certificate JavaScript (Basic) 2021</h4>
              <span><a href="https://www.hackerrank.com/certificates/1f65600c0ebd" target="_blank">Certificate</a></span>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">HackerRank certificate Python (Basic) 2021</h4>
              <span><a href="https://www.hackerrank.com/certificates/b12171aa72cd" target="_blank">Certificate</a></span>
            </li>

          </ol>
        </section>
      </article>
    </>
  );
}

export default Certificates;

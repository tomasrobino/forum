import styles from "./Reply.module.css"

export function Reply(props: {quote?: boolean}) {
  return (
    <div className={styles.reply}>
      <div className={styles.parentPanel}>
        <div className={styles.userPanel}>
          <div className={styles.profilePicture}></div>
          <p className={styles.user}>user</p>
          <div className={styles.datapoint}><p className={styles.dataTitle}>joined:</p> <p className={styles.userData}>1/3/2015</p></div>
          <div className={styles.datapoint}><p className={styles.dataTitle}>posts:</p> <p className={styles.userData}>6546</p></div>
        </div>
        <div className={styles.textPanel}>
          <div className={styles.bar}>
            <p className={styles.title}>RE: Pensando en la inmortalidad del cangrejo</p>
            <p className={styles.date}>5/10/2023</p>
          </div>
          {props.quote?
            <div className={styles.quoteBox}>
              <p className={styles.quoteAuthor}>Author Name</p>
              <p className={styles.quoteText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum pharetra mi, ac porta magna luctus eget.</p>
            </div>
            : null}
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum pharetra mi, ac porta magna luctus eget. Etiam ac vulputate ante, laoreet pharetra odio. Pellentesque tincidunt diam eu nisi volutpat rutrum. Sed sit amet odio at tortor ultricies malesuada. Praesent mollis, est quis rutrum feugiat, dolor mauris ornare magna, a iaculis orci risus dictum dui. Suspendisse hendrerit nibh elit, sit amet consectetur leo dapibus in. Morbi eu lacinia justo. Cras quis massa turpis. Donec lacinia quam non sem egestas vestibulum. Maecenas quam lacus, commodo non ex id, tempus dapibus orci. Cras at nisl tempus, elementum enim id, bibendum lectus. Praesent tincidunt eu sem ut blandit. Aenean eu aliquam risus.</p>
        </div>
      </div>
    </div>
  );
}
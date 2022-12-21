import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import "./ContactSection.scss";
import { Animation } from "../Animation/Animation";
// import { Section } from "../../components/Section";
// import { SocialProfiles } from "../../components/SocialProfiles";
import { useLocalDataSource } from "./data";

interface Props {
  sectionId: string;
  heading: string;
}

export function ContactSection(props: Props): React.ReactElement {
  const response = useLocalDataSource();
  const data = response.allContactJson.sections[0];

  return (
    //   <Section
    //     anchor={props.sectionId}
    //     heading={props.heading}
    //     additionalClasses={[classes.Contact]}
    //   >
    // {data.description && (
    //   <p className={classes.Description}>{data.description}</p>
    // )}
    <Animation type="fadeUp">
      <div className="Contact Profile">
        {data.image.src && (
          <GatsbyImage
            className="Contact Profile Avatar"
            image={data.image.src.childImageSharp.gatsbyImageData}
            alt={data.image.alt || `Profile ${data.name}`}
          />
        )}
        <div className="Contact Profile ContactDetails">
          <div className="Contact Profile ContactDetails Name">{data.name}</div>
          <u>
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </u>
        </div>
      </div>
    </Animation>
    //     data.socialProfiles && (
    //       <SocialProfiles
    //         from={data.socialProfiles.from}
    //         showIcon={data.socialProfiles.showIcons}
    //       />
    //     )}
    //   </Section>
  );
}

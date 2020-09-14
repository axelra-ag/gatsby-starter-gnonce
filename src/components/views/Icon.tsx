import React from "react";
import styled from "styled-components";

const MyIcon = styled.svg<{move?: boolean; color: string; size?: number}>`
  &:hover {
    transform: ${props => (props.move ? "translateY(2px)" : null)};
  }
  fill: ${props => props.color};
  transition: 0.25s all;
  vertical-align: middle;
  width: ${props => (props.size ? `${props.size}px` : "inherit")};
  height: ${props => (props.size ? `${props.size}px` : "inherit")};
`;

type IconProps = {
  name: IconTypes;
  color: string;
  move?: boolean;
  size?: number;
  className?: string;
};

export enum IconTypes {
  PICTURE = "PICTURE"
}

export const Icon = ({name, ...props}: IconProps) => {
  switch (name) {
    case IconTypes.PICTURE:
      return (
        <MyIcon viewBox="0 0 128 128" x="0px" y="0px" {...props}>
          <path d="M32.9248,22.40308,12.60236,28.44641a3.99982,3.99982,0,0,0-2.69366,4.97491l9.86859,33.16,2.08661-7.0116L13.74249,32.2804l17.81982-5.29907Z" />
          <path d="M15.6322,80.50946l2.08673-7.01166L3.86078,26.93213l30.40717-9.0423,1.36249-4.57819L2.72058,23.09814A3.99985,3.99985,0,0,0,.02692,28.073Z" />
          <path d="M81.57129,6.01044,86.1499,7.372,84.80713,2.86A3.99571,3.99571,0,0,0,79.83313.167L70.87708,2.83026l7.01648,2.08649L80.97327,4.001Z" />
          <path d="M127.37823,25.02759a3.99987,3.99987,0,0,0-2.37732-1.92944L47.88843.167A3.99571,3.99571,0,0,0,42.91443,2.86L14.02692,99.92694a3.99995,3.99995,0,0,0,2.69366,4.97491L93.83313,127.833a3.99571,3.99571,0,0,0,4.974-2.69305l28.88745-97.067A3.99971,3.99971,0,0,0,127.37823,25.02759ZM94.97327,123.999,17.86078,101.06787,46.74829,4.001l77.11249,22.93115Z" />
          <path d="M51.02631,38.49487l3.487,2.00531a.72828.72828,0,0,1,.09454,1.19574l-3.21429,2.61487a.72738.72738,0,0,0,.44629,1.29248.80448.80448,0,0,0,.09344-.00555l3.9884-.47113a.74674.74674,0,0,1,.08746-.00519.72574.72574,0,0,1,.6936.92535l-1.11017,3.91309a.72729.72729,0,0,0,.702.92865.70909.70909,0,0,0,.48157-.19189l3.03723-2.75549a.7234.7234,0,0,1,1.1676.28882l1.37006,3.77167a.70716.70716,0,0,0,.67786.47729.7155.7155,0,0,0,.71112-.568l.91724-4.05908a.72758.72758,0,0,1,.71039-.56848.71648.71648,0,0,1,.3938.11829l3.39337,2.21765a.71673.71673,0,0,0,.39514.12152.73153.73153,0,0,0,.66827-1.01923l-1.61859-3.78064a.72872.72872,0,0,1,.62311-1.0141l4.12744-.25647a.72827.72827,0,0,0,.3183-1.35712l-3.487-2.00531a.72828.72828,0,0,1-.09454-1.19574l3.21429-2.61487a.72743.72743,0,0,0-.44635-1.29254.79022.79022,0,0,0-.09338.00555l-3.9884.47119a.74674.74674,0,0,1-.08746.00519.72569.72569,0,0,1-.6936-.92535l1.11017-3.91309a.72732.72732,0,0,0-.70209-.92871.70919.70919,0,0,0-.48157.19189L64.88141,32.867a.72338.72338,0,0,1-1.1676-.28888l-1.37012-3.77161a.70714.70714,0,0,0-.6778-.47736.71545.71545,0,0,0-.71112.56805l-.91724,4.059a.72753.72753,0,0,1-.71039.56848.716.716,0,0,1-.3938-.11829L55.54,31.18878a.7171.7171,0,0,0-.39508-.12146.73149.73149,0,0,0-.66833,1.01917l1.61859,3.7807a.72866.72866,0,0,1-.62311,1.014l-4.1275.25647A.72831.72831,0,0,0,51.02631,38.49487Zm8.42474.13977a4.7182,4.7182,0,0,0,.5119-1.15179,4.70127,4.70127,0,0,0,2.27509-.9516,4.70906,4.70906,0,0,0,2.158.52441l.05878-.00037a4.67384,4.67384,0,0,0,1.44971,1.72107,4.7348,4.7348,0,0,0,.158,2.40314,4.719,4.719,0,0,0-1.33057,2.14575,4.7009,4.7009,0,0,0-2.27515.9516,4.7107,4.7107,0,0,0-2.15729-.52441h-.00073l-.05865.00037a4.67252,4.67252,0,0,0-1.44977-1.72107,4.73352,4.73352,0,0,0-.1579-2.4032A4.717,4.717,0,0,0,59.451,38.63464Z" />
          <path d="M28.18994,84.30115a4.00008,4.00008,0,0,0,2.37738,1.9295L92.44769,104.6322a3.99571,3.99571,0,0,0,4.974-2.69305l20.39117-68.51782a3.99995,3.99995,0,0,0-2.69366-4.97491L53.23883,10.04486a3.99571,3.99571,0,0,0-4.974,2.69305L27.87366,81.25574A3.99964,3.99964,0,0,0,28.18994,84.30115Zm23.90869-70.4223L113.97906,32.2804,99.66095,80.39172l-.97736-2.95447a2.0002,2.0002,0,0,0-2.92969-1.08594L92.3,78.4295l-6.0647-31.91266a2.00047,2.00047,0,0,0-3.26465-1.1474l-22.063,18.86493-2.68848-3.58685a1.99812,1.99812,0,0,0-2.79687-.40332L48.93811,65.085l-3.22229-5.76855a1.99988,1.99988,0,0,0-2.76074-.748l-5.039,2.96631ZM36.24121,67.16248l6.98-4.10876,3.33691,5.97351c.01123.02.0285.03387.04028.05341a1.04005,1.04005,0,0,0,.24933.33075c.023.02466.04382.05084.06787.07416a1.97855,1.97855,0,0,0,.84357.486c.02435.0069.04852.0119.07312.01788a1.99365,1.99365,0,0,0,.43652.05731c.01263.00024.02472.00488.03735.00488l.0177-.0022a1.97488,1.97488,0,0,0,.91565-.23578c.01294-.0069.027-.00873.03979-.01593.03009-.01678.054-.03979.08282-.05792.04547-.02863.09363-.04993.13739-.0827l6.71582-5.01355,2.65942,3.548,3.63745,7.39325a2.00006,2.00006,0,1,0,3.58936-1.76562l-3.03485-6.16754,19.88251-17.001,5.69714,29.97729L77.2793,87.46741a2.00018,2.00018,0,0,0,2.0625,3.42767l16.33008-9.826,1.7998,5.43842a1.98012,1.98012,0,0,0,.23132.46332l-4.11511,13.82745L31.70746,82.39667Z" />
        </MyIcon>
      );

    default:
      return <h1>Icon not found</h1>;
  }
};
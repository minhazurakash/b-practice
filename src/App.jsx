import { MinusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Grid,
  Input,
  InputNumber,
  Progress,
  Radio,
  Row,
} from "antd";
import ImagePreview from "./components/ImagePreview";
import VideoPreview from "./components/VideoPreview";
import { Dayjs } from "dayjs";
import CustomUpload from "./components/CustomUpload";
import { LuUpload } from "react-icons/lu";
import ScrollableItems from "./components/ScrollAbleitem";
import { FaRegUser } from "react-icons/fa";
import { PiUserRectangle } from "react-icons/pi";
const App = () => {
  const [profileForm] = Form.useForm();
  const formValues = Form.useWatch([], profileForm);
  const screen = Grid.useBreakpoint();

  console.log(formValues);
  return (
    <section className="create_profile_Page">
      <div className="p-10">
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={10} xl={8}>
            <div className="form_area">
              <Form
                form={profileForm}
                layout="vertical"
                initialValues={{ skills: [{}], experiences: [{}] }}
              >
                <div className="basic_area custom_field_area">
                  <h3 className="area_title">Basic Information</h3>
                  <Row gutter={20}>
                    <Col xs={24} md={12}>
                      <Form.Item name="avatar">
                        <CustomUpload
                          onRemove={() => {
                            profileForm.setFieldValue("avatar", null);
                          }}
                          body={
                            <>
                              <div className="flex flex-col items-center p-5 ">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full">
                                  <FaRegUser className="mb-3 text-3xl" />
                                </div>
                                <p className="text-sm">Add Profile Photo</p>
                              </div>
                            </>
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item name="introductionVideo">
                        <CustomUpload
                          acceptedType={["mp4", "3gp", "webp"]}
                          onRemove={() => {
                            profileForm.setFieldValue(
                              "introductionVideo",
                              null
                            );
                          }}
                          body={
                            <>
                              <div className="flex flex-col items-center p-5 ">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full">
                                  <PiUserRectangle className="mb-3 text-5xl" />
                                </div>
                                <p className="text-sm">Add Profile Video</p>
                              </div>
                            </>
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="fullName" label="Name">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="lastEducation" label="Educations">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="currentProfession"
                        label="Current Profession"
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="nationality" label="Nationality">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="religion" label="Religion">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="gender" label="Gender">
                        <Radio.Group
                          optionType="button"
                          buttonStyle="solid"
                          className="w-full"
                        >
                          <Radio value="male" className="w-1/2">
                            Male
                          </Radio>
                          <Radio value="female" className="w-1/2">
                            Female
                          </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="dob" label="Date of Birth">
                        <DatePicker className="w-full" format="DD MM YYYY" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="height" label="Height  (ft’ cm’’)">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item name="weight" label="Weight (kg)">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Upload Health Certificates"
                        name="healthCertificate"
                      >
                        <CustomUpload
                          onRemove={() => {
                            profileForm.setFieldValue(
                              "healthCertificate",
                              null
                            );
                          }}
                          body={
                            <>
                              <div
                                className="flex flex-col items-center p-5 border-dashed w-96"
                                style={{ width: "300px" }}
                              >
                                <LuUpload className="mb-2 text-2xl text-[#FF8141]" />
                                <p className="text-lg">
                                  Drag and Drop files to upload
                                </p>
                                <p className="text-sm">
                                  Supported files: video
                                </p>
                              </div>
                            </>
                          }
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Upload Police Clearances"
                        name="policeClearance"
                      >
                        <CustomUpload
                          onRemove={() => {
                            profileForm.setFieldValue("policeClearance", null);
                          }}
                          body={
                            <>
                              <div
                                className="flex flex-col items-center p-5 border-dashed w-96"
                                style={{ width: "300px" }}
                              >
                                <LuUpload className="mb-2 text-2xl text-[#FF8141]" />
                                <p className="text-lg">
                                  Drag and Drop files to upload
                                </p>
                                <p className="text-sm">
                                  Supported files: video
                                </p>
                              </div>
                            </>
                          }
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
                <div className="experience_area custom_field_area">
                  <h3 className="area_title">My Work Experiences</h3>
                  <Form.List name="experiences">
                    {(fields, { add, remove }) => (
                      <div
                        style={{
                          display: "flex",
                          rowGap: 16,
                          flexDirection: "column",
                        }}
                      >
                        {fields.map((field) => (
                          <>
                            <div className="flex justify-end">
                              <MinusCircleOutlined
                                className="relative text-lg text-red-500 cursor-pointer top-3"
                                onClick={() => {
                                  remove(field.name);
                                }}
                              />
                            </div>

                            <Row gutter={20}>
                              <Col span={12}>
                                <Form.Item
                                  label="Company name"
                                  name={[field.name, "companyName"]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col span={12}>
                                <Form.Item
                                  name={[field.name, "designations"]}
                                  label="Job Title/Designations"
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col span={12}>
                                <Form.Item
                                  name={[field.name, "duration"]}
                                  label="Job Durations"
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col span={12}>
                                <Form.Item
                                  name={[field.name, "yearOfExperience"]}
                                  label="Years of Experiences"
                                >
                                  <Input />
                                </Form.Item>
                              </Col>

                              <Col span={12}>
                                <Form.Item
                                  name={[field.name, "supervisorName"]}
                                  label="Supervisor’s Name "
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col span={12}>
                                <Form.Item
                                  name={[field.name, "supervisorContactNumber"]}
                                  label="Supervisor’s contact "
                                >
                                  <Input />
                                </Form.Item>
                              </Col>

                              <Col span={24}>
                                <Form.Item
                                  label="Upload Work experience certificate"
                                  name={[field.name, "experienceCertificate"]}
                                >
                                  <CustomUpload
                                    onRemove={() => {
                                      profileForm.setFieldValue(
                                        [
                                          "experiences",
                                          field.name,
                                          "experienceCertificate",
                                        ],
                                        null
                                      );
                                    }}
                                    body={
                                      <>
                                        <div
                                          className="flex flex-col items-center p-5 border-dashed w-96"
                                          style={{ width: "300px" }}
                                        >
                                          <LuUpload className="mb-2 text-2xl text-[#FF8141]" />
                                          <p className="text-lg">
                                            Drag and Drop files to upload
                                          </p>
                                          <p className="text-sm">
                                            Supported files: jpg,png,pdf
                                          </p>
                                        </div>
                                      </>
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  label="Upload work Demonstration video"
                                  name={[
                                    field.name,
                                    "experienceDemonstrationVideo",
                                  ]}
                                >
                                  <CustomUpload
                                    acceptedType={["3gp", "mp4", "webp"]}
                                    onRemove={() => {
                                      profileForm.setFieldValue(
                                        [
                                          "experiences",
                                          field.name,
                                          "experienceDemonstrationVideo",
                                        ],
                                        null
                                      );
                                    }}
                                    body={
                                      <>
                                        <div
                                          className="flex flex-col items-center p-5 border-dashed w-96"
                                          style={{ width: "300px" }}
                                        >
                                          <LuUpload className="mb-2 text-2xl text-[#FF8141]" />
                                          <p className="text-lg">
                                            Drag and Drop files to upload
                                          </p>
                                          <p className="text-sm">
                                            Supported files: video
                                          </p>
                                        </div>
                                      </>
                                    }
                                  />
                                </Form.Item>
                              </Col>
                            </Row>
                          </>
                        ))}

                        <div className="flex justify-center">
                          <Button
                            type="dashed"
                            className="more_btn"
                            onClick={() => add()}
                            block
                          >
                            + Add more skills
                          </Button>
                        </div>
                      </div>
                    )}
                  </Form.List>
                </div>
                <div className="skill_area custom_field_area">
                  <h3 className="area_title">My Skills</h3>
                  <Form.List name="skills">
                    {(fields, { add, remove }) => (
                      <div
                        style={{
                          display: "flex",
                          rowGap: 16,
                          flexDirection: "column",
                        }}
                      >
                        {fields.map((field) => (
                          <>
                            <div className="flex justify-end">
                              <MinusCircleOutlined
                                className="relative text-lg text-red-500 cursor-pointer top-3"
                                onClick={() => {
                                  remove(field.name);
                                }}
                              />
                            </div>

                            <Row gutter={20}>
                              <Col span={24}>
                                <Form.Item
                                  label="Name of the skill"
                                  name={[field.name, "title"]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col span={12}>
                                <Form.Item
                                  label="Skill Year"
                                  name={[field.name, "skillYear"]}
                                >
                                  <Input />
                                </Form.Item>
                              </Col>
                              <Col span={12}>
                                <Form.Item
                                  label="Expert Level"
                                  name={[field.name, "expertiseLevel"]}
                                >
                                  <InputNumber
                                    min={0}
                                    max={100}
                                    className="w-full"
                                    type="number"
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  label="Upload Training Certificate"
                                  name={[field.name, "trainingCertificate"]}
                                >
                                  <CustomUpload
                                    onRemove={() => {
                                      profileForm.setFieldValue(
                                        [
                                          "skills",
                                          field.name,
                                          "trainingCertificate",
                                        ],
                                        null
                                      );
                                    }}
                                    body={
                                      <>
                                        <div
                                          className="flex flex-col items-center p-5 border-dashed w-96"
                                          style={{ width: "300px" }}
                                        >
                                          <LuUpload className="mb-2 text-2xl text-[#FF8141]" />
                                          <p className="text-lg">
                                            Drag and Drop files to upload
                                          </p>
                                          <p className="text-sm">
                                            Supported files: jpg,png,pdf
                                          </p>
                                        </div>
                                      </>
                                    }
                                  />
                                </Form.Item>
                              </Col>
                              <Col span={24}>
                                <Form.Item
                                  label="Upload Skill Demonstration video"
                                  name={[field.name, "skillDemonstrationVideo"]}
                                >
                                  <CustomUpload
                                    acceptedType={["3gp", "mp4", "webp"]}
                                    onRemove={() => {
                                      profileForm.setFieldValue(
                                        [
                                          "skills",
                                          field.name,
                                          "skillDemonstrationVideo",
                                        ],
                                        null
                                      );
                                    }}
                                    body={
                                      <>
                                        <div
                                          className="flex flex-col items-center p-5 border-dashed w-96"
                                          style={{ width: "300px" }}
                                        >
                                          <LuUpload className="mb-2 text-2xl text-[#FF8141]" />
                                          <p className="text-lg">
                                            Drag and Drop files to upload
                                          </p>
                                          <p className="text-sm">
                                            Supported files: video
                                          </p>
                                        </div>
                                      </>
                                    }
                                  />
                                </Form.Item>
                              </Col>
                            </Row>
                          </>
                        ))}

                        <div className="flex justify-center">
                          <Button
                            type="dashed"
                            className="more_btn"
                            onClick={() => add()}
                            block
                          >
                            + Add more skills
                          </Button>
                        </div>
                      </div>
                    )}
                  </Form.List>
                </div>
                <Form.Item>
                  <Button className="save_btn">Save</Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={24} lg={14} xl={16}>
            <div className="preview_area">
              <div className="profile">
                <Row gutter={[30, 30]}>
                  <Col xs={24} lg={10}>
                    <div className="video_thumb_area">
                      <VideoPreview
                        // url="/video.mp4"
                        url={formValues?.introductionVideo}
                        thumbUrl={
                          formValues?.avatar || formValues?.introductionVideo
                            ? ""
                            : "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                        }
                        // className="w-[50%] 2xl:h-20 h-[200px]"
                      />
                    </div>
                  </Col>
                  <Col xs={24} lg={14}>
                    <div className="details_area">
                      <div className="header">
                        <h2>{formValues?.fullName}</h2>
                        <p>
                          {formValues?.currentProfession}{" "}
                          {formValues?.currentProfession && "|"}{" "}
                          {formValues?.lastEducation}
                        </p>
                      </div>
                      <div className="details">
                        <div className="item">
                          <p className="title">Nationality</p>
                          <p className="value">{formValues?.nationality}</p>
                        </div>
                        <div className="item">
                          <p className="title">Religion</p>
                          <p className="value">{formValues?.religion}</p>
                        </div>
                        <div className="item">
                          <p className="title">Gender</p>
                          <p className="value">{formValues?.gender}</p>
                        </div>
                        <div className="item">
                          <p className="title">Date of Birth</p>
                          <p className="value">
                            {formValues?.dob &&
                              Dayjs(formValues?.dob).format("DD-MM-YYYY")}
                          </p>
                        </div>
                        <div className="item">
                          <p className="title">Height</p>
                          <p className="value">{formValues?.height}</p>
                        </div>
                        <div className="item">
                          <p className="title">Weight</p>
                          <p className="value">{formValues?.weight}</p>
                        </div>
                        <div className="item">
                          <p className="title">Health Certificate</p>
                          <p className="value">
                            {formValues?.healthCertificate
                              ? "File uploaded"
                              : ""}
                          </p>
                        </div>
                        <div className="item">
                          <p className="title">Police Clearance</p>
                          <p className="value">
                            {formValues?.policeClearance ? "File uploaded" : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {formValues?.experiences?.length > 0 && (
                <div className="work_experience">
                  <h2 className="section_title">My Work Experiences</h2>
                  <div className="experience_item">
                    {formValues?.experiences?.map((item, idx) => {
                      return (
                        <ScrollableItems key={idx}>
                          <Row gutter={[20, 20]} className="mb-10 scroll_able">
                            <Col xs={24} xxl={14}>
                              <div className="header">
                                <h3>{item?.designations}</h3>
                                <p>{item?.duration}</p>
                              </div>
                              <div className="content">
                                <div className="item">
                                  <h3>Company Name</h3>
                                  <p>{item?.companyName}</p>
                                </div>
                                <div className="item">
                                  <h3>Year of Experiences</h3>
                                  <p>{item?.yearOfExperience}</p>
                                </div>
                                <div className="item">
                                  <h3>Supervisor’s Name</h3>
                                  <p>{item?.supervisorName}</p>
                                </div>
                                <div className="item">
                                  <h3>Supervisor’s Number</h3>
                                  <p>{item?.supervisorContactNumber}</p>
                                </div>
                              </div>
                            </Col>
                            <Col xs={24} xxl={10}>
                              <div className="flex gap-3">
                                <ImagePreview
                                  width={"50%"}
                                  height={screen?.xxl ? 80 : 200}
                                  src={item?.experienceCertificate}
                                />
                                <VideoPreview
                                  url={item?.experienceDemonstrationVideo}
                                  // thumbUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&s"
                                  className="w-[50%] 2xl:h-20 h-[200px]"
                                />
                              </div>
                            </Col>
                          </Row>
                        </ScrollableItems>
                      );
                    })}
                  </div>
                </div>
              )}
              {formValues?.skills?.length > 0 && (
                <div className="work_experience professional_skill">
                  <h2 className="section_title">My Professional Skills</h2>
                  <div className="experience_item">
                    {formValues?.skills?.map((item, idx) => {
                      return (
                        <Row key={idx} gutter={[20, 20]} align={"middle"}>
                          <Col xs={24} xxl={16}>
                            <div className="item">
                              <div className="header">
                                <div className="flex items-end gap-10">
                                  <h3>{item?.title}</h3>
                                  <p>{item?.skillYear}</p>
                                </div>
                                <span>{item?.expertiseLevel}%</span>
                              </div>
                              <div className="content">
                                <Progress
                                  strokeColor="#FF7D44"
                                  className="w-full"
                                  percent={item?.expertiseLevel ?? 0}
                                  showInfo={false}
                                  size="small"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} xxl={8}>
                            <div className="flex gap-3">
                              <ImagePreview
                                width={"50%"}
                                height={screen?.xxl ? 80 : 200}
                                src={item?.trainingCertificate}
                              />
                              <VideoPreview
                                // url="/video.mp4"
                                url={item?.skillDemonstrationVideo}
                                // thumbUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0ZRs6i9PIaxbN3oSv_oV0pN31UjmvpMl8w&s"
                                className="w-[50%] 2xl:h-20 h-[200px]"
                              />
                            </div>
                          </Col>
                        </Row>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default App;

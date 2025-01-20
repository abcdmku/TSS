import {
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from '@heroui/react';
import { useRef, useState } from 'react';
import {
  DriverRecommendation,
  SpeakerCabinet,
} from '../../types/types';
import { PageContainer, Header, Text, StorageFile, StorageImage, Contributor, Timeline, arrayToObj } from '@hoqs/core-components';
import ProtectedPage from '../../auth/ProtectedPage';
import BadgeSelector from '../../../../core-components/src/lib/badges/BadgeSelector';
import { supabase } from '../../helpers/supabase';
import { useSupabaseRequest } from '../../helpers/supabaseRequest';
import { mmToInches, woodThicknessToInches, kgsToPounds } from '../../helpers/translations';
import { CABINET_TYPES, DRIVER_SIZES, CABINET_BADGES, MAX_SPL_COUNT, WOOD_THICKNESS } from '../../helpers/variables';
import DeleteCabinetButton from '../buttons/DeleteCabinetButton';
import SaveCabinetButton from '../buttons/SaveCabinetButton';
import ContributorsEditor from '../ContributorEditor';
import EditDriverRecommendation from '../EditDriverRecommendation';
import { FileUploader } from '@hoqs-features';
import ImageUploader from '../../uploader/ImageUploader';


export type SpeakerCabinetWithRecommendationChanges = SpeakerCabinet & {
  recommendationChanges?: DriverRecommendation[];
};

export function EditCabinet({id}: {id: string}) {
  const cabReq = useRef(supabase.from('cabinets').select('*').eq('id', id));
  const { StatusComponent, data } = useSupabaseRequest(cabReq.current);
  const cabinet = data?.[0] as SpeakerCabinetWithRecommendationChanges;

  return (
    <ProtectedPage>
      <PageContainer className="flex flex-col gap-4">
        <StatusComponent />
        {cabinet && <EditForm initialCabinet={cabinet} />}
      </PageContainer>
    </ProtectedPage>
  );
}

interface EditFormProps {
  initialCabinet: SpeakerCabinetWithRecommendationChanges;
}

function EditForm({ initialCabinet }: EditFormProps) {
  const [cabinet, setCabinet] = useState(initialCabinet);
  console.log(cabinet.recommendationChanges);

  function setImages(images: StorageImage[]) {
    setCabinet((cabinet) => {
      return { ...cabinet, images };
    });
  }

  function setMeasurements(measurements: StorageImage[]) {
    setCabinet((cabinet) => {
      return { ...cabinet, measurements };
    });
  }

  function setFiles(files: StorageFile[] | null) {
    setCabinet((cabinet) => {
      return { ...cabinet, files };
    });
  }

  function setContributors(contributors: Contributor[]) {
    setCabinet((cabinet) => {
      return { ...cabinet, contributors };
    });
  }

  function setRecommendationChanges(recommendations: DriverRecommendation[]) {
    setCabinet((cabinet) => {
      return { ...cabinet, recommendationChanges: recommendations };
    });
  }

  return (
    <>
      {!initialCabinet.active && (
        <div className="w-full flex justify-center bg-red-500">
          <Text className="my-0">NOT PUBLISHED</Text>
        </div>
      )}
      <div className="flex justify-between">
        <Header variant="subtitle">
          {cabinet.brand} - {cabinet.model}
        </Header>

        <Checkbox
          defaultSelected={cabinet.active}
          aria-label="Is the cabinet active and displayed?"
          onChange={(e) => {
            setCabinet({ ...cabinet, active: e.target.checked });
          }}
        >
          Active
        </Checkbox>
      </div>
      <Header variant="sub-subtitle">Details</Header>
      <div className="grid grid-cols-3 gap-4">
        <Input
          type="text"
          aria-label="Write speaker brand"
          variant="bordered"
          placeholder="Brand"
          defaultValue="Brand"
          label="Brand"
          value={cabinet.brand}
          onChange={(e) => setCabinet({ ...cabinet, brand: e.target.value })}
        />
        <Input
          type="text"
          aria-label="Write speaker model"
          variant="bordered"
          placeholder="Type C"
          defaultValue="Type C"
          label="Model"
          value={cabinet.model}
          onChange={(e) => setCabinet({ ...cabinet, model: e.target.value })}
        />
        <Select
          items={arrayToObj(CABINET_TYPES)}
          label="Type"
          aria-label="Select cabinet type"
          placeholder="Select cabinet type"
          selectedKeys={cabinet.type ? [cabinet.type] : []}
          variant="bordered"
          onChange={(e) => setCabinet({ ...cabinet, type: e.target.value })}
        >
          {CABINET_TYPES.map((type) => (
            <SelectItem key={type}>{type}</SelectItem>
          ))}
        </Select>

        <Select
          items={arrayToObj(DRIVER_SIZES)}
          label="Driver Size"
          selectionMode="multiple"
          aria-label="Select cabinet driver size"
          placeholder="Select cabinet size"
          variant="bordered"
          selectedKeys={cabinet.driver_size}
          onChange={(e) =>
            setCabinet((cabinet) => ({
              ...cabinet,
              driver_size: e.target.value.split(','),
            }))
          }
        >
          {DRIVER_SIZES.map((driverSize) => (
            <SelectItem key={driverSize}>{driverSize}</SelectItem>
          ))}
        </Select>
        <BadgeSelector
          badges={cabinet.badges}
          label="Cabinet Badges"
          aria-label="Select cabinet badges"
          className="col-span-2"
          placeholder="Select cabinet badges"
          selectionMode="multiple"
          setBadges={(badges) =>
            setCabinet((cabinet) => ({
              ...cabinet,
              badges,
            }))
          }
          badgeTypes={CABINET_BADGES}
        />

        <Input
          type="date"
          variant="bordered"
          label="Release date"
          aria-label="Select cabinet release date"
          value={cabinet.created_at.slice(0, 10)}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              created_at: new Date(e.target.value).toISOString(),
            })
          }
        />
      </div>
      <Header variant="sub-subtitle">Descriptions</Header>
      <Textarea
        label="Short Entry Description"
        variant="bordered"
        aria-label="Write a short description"
        placeholder="Enter your description"
        className="w-full h-fit"
        minRows={3}
        maxRows={5}
        value={cabinet.short_description}
        onChange={(e) =>
          setCabinet({ ...cabinet, short_description: e.target.value })
        }
      />
      <Textarea
        label="Full Description"
        variant="bordered"
        aria-label="Write a full description"
        placeholder="Enter your description"
        className="w-full"
        minRows={10}
        maxRows={30}
        value={cabinet.description}
        onChange={(e) =>
          setCabinet({ ...cabinet, description: e.target.value })
        }
      />
      <Header variant="sub-subtitle">Images</Header>
      <ImageUploader
        setImages={setImages}
        images={(cabinet.images ?? []) as StorageImage[]}
        bucket="cabinets"
        path={cabinet.id}
      />

      <Header variant="subtitle">Specifications</Header>
      <Header variant="sub-subtitle">Response</Header>
      <div className="grid grid-cols-3 gap-4">
        <Select
          items={arrayToObj(MAX_SPL_COUNT)}
          label="Type"
          aria-label="Select max SPL counts"
          placeholder="Max SPL counts"
          variant="bordered"
          value={MAX_SPL_COUNT[cabinet.max_spl.length - 1]}
          defaultSelectedKeys={
            cabinet.max_spl.length !== 0
              ? String(cabinet.max_spl.length - 1)
              : undefined
          }
          onChange={(e) => {
            cabinet.max_spl.length = parseFloat(e.target.value) + 1;
            setCabinet({ ...cabinet });
          }}
        >
          {MAX_SPL_COUNT.map((cabinet, index) => (
            <SelectItem key={index}>{cabinet}</SelectItem>
          ))}
        </Select>
        {MAX_SPL_COUNT.filter((_, i) => i < cabinet.max_spl.length).map(
          (_, i) => (
            <Input
              key={i}
              type="number"
              aria-label={`Write max SPL ${MAX_SPL_COUNT[i]}`}
              variant="bordered"
              label={`Max SPL (${MAX_SPL_COUNT[i]})`}
              value={String(cabinet.max_spl[i])}
              onChange={(e) => {
                cabinet.max_spl[i] = parseFloat(e.target.value);
                setCabinet({ ...cabinet });
              }}
              endContent="SPL"
            />
          )
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Input
          type="number"
          variant="bordered"
          label="Frequency Start"
          aria-label="Write speaker frequency start"
          endContent="Hz"
          value={String(cabinet.frequency_start ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              frequency_start: e.target.value ? parseInt(e.target.value) : null,
            })
          }
        />
        <Input
          type="number"
          variant="bordered"
          label="Frequency End"
          aria-label="Write speaker frequency end"
          endContent="Hz"
          value={String(cabinet.frequency_end ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              frequency_end: e.target.value ? parseInt(e.target.value) : null,
            })
          }
        />
        <Input
          type="number"
          variant="bordered"
          label="Sensitivity"
          aria-label="Write speaker sensitivity"
          endContent="dB"
          value={String(cabinet.sensitivity ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              sensitivity: e.target.value ? parseFloat(e.target.value) : null,
            })
          }
        />
      </div>
      <Header variant="sub-subtitle">Directivity</Header>

      <div className="grid grid-cols-3 gap-4">
        <Input
          type="number"
          variant="bordered"
          label="Horizontal"
          aria-label="Write speaker directivity horizontal"
          endContent="deg"
          value={String(cabinet.directivity_horizontal ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              directivity_horizontal: e.target.value
                ? parseFloat(e.target.value)
                : null,
            })
          }
        />
        <Input
          type="number"
          variant="bordered"
          label="Vertical"
          aria-label="Write speaker directivity vertical"
          endContent="deg"
          value={String(cabinet.directivity_vertical ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              directivity_vertical: e.target.value
                ? parseFloat(e.target.value)
                : null,
            })
          }
        />
        <Text variant="small" color="muted">
          Leave fields empty, if directivity doesn't apply
        </Text>
      </div>
      <Header variant="sub-subtitle">Dimensions</Header>
      <div className="grid grid-cols-3 gap-4">
        <Input
          type="number"
          variant="bordered"
          label="Height"
          aria-label="Write speaker height"
          endContent="mm"
          value={String(cabinet.height_mm ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              height_mm: e.target.value ? parseFloat(e.target.value) : null,
            })
          }
        />
        <Input
          type="number"
          variant="bordered"
          label="Width"
          aria-label="Write speaker width"
          endContent="mm"
          value={String(cabinet.width_mm ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              width_mm: e.target.value ? parseFloat(e.target.value) : null,
            })
          }
        />
        <Input
          type="number"
          variant="bordered"
          label="Depth"
          aria-label="Write speaker depth"
          endContent="mm"
          value={String(cabinet.depth_mm ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              depth_mm: e.target.value ? parseFloat(e.target.value) : null,
            })
          }
        />
        <Input
          type="number"
          variant="bordered"
          label="Weight (Unloaded)"
          aria-label="Write speaker weight"
          endContent="kg"
          value={String(cabinet.weight_kg ?? '')}
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              weight_kg: e.target.value ? parseFloat(e.target.value) : null,
            })
          }
        />

        <Select
          items={arrayToObj(WOOD_THICKNESS)}
          label="Wood Thickness"
          placeholder="Select wood Thickness"
          variant="bordered"
          aria-label="Select wood thickness"
          onChange={(e) =>
            setCabinet({
              ...cabinet,
              wood_thickness_mm: e.target.value,
            })
          }
          selectedKeys={
            cabinet.wood_thickness_mm ? [cabinet.wood_thickness_mm] : []
          }
        >
          {WOOD_THICKNESS.map((thickness) => (
            <SelectItem key={thickness}>{thickness}</SelectItem>
          ))}
        </Select>
        <Text variant="small" color="muted">
          Leave fields empty, if measures aren't known
        </Text>
      </div>
      <Text variant="small" color="muted">
        Size: {mmToInches(cabinet.width_mm)} x {mmToInches(cabinet.height_mm)} x{' '}
        {mmToInches(cabinet.depth_mm)} inches (Width, height, depth)
        <br /> Thickness:{' '}
        {woodThicknessToInches(cabinet.wood_thickness_mm ?? '')} inch
        <br /> Weight: {kgsToPounds(cabinet.weight_kg)} pounds
      </Text>

      <Header variant="sub-subtitle">Measurements</Header>
      <ImageUploader
        setImages={setMeasurements}
        images={(cabinet.measurements ?? []) as StorageImage[]}
        bucket="cabinets"
        path={cabinet.id}
      />

      <Header variant="sub-subtitle">Files</Header>
      <FileUploader
        files={cabinet.files}
        setFiles={setFiles}
        bucket="cabinets"
        path={cabinet.id}
      />

      <Header variant="sub-subtitle">Contributors</Header>
      <ContributorsEditor
        contributors={cabinet.contributors}
        setContributors={setContributors}
      />

      <Header variant="sub-subtitle">Timeline</Header>
      <Timeline
        entries={cabinet.timeline}
        setEntries={(entries) => setCabinet({ ...cabinet, timeline: entries })}
      />

      <Header variant="sub-subtitle">Recommended drivers</Header>
      <EditDriverRecommendation
        id={cabinet.id}
        setRecommendationChanges={setRecommendationChanges}
      />

      {/* FOOTER */}
      <div className="flex justify-between flex-row-reverse">
        <SaveCabinetButton cabinet={cabinet} />
        <DeleteCabinetButton id={cabinet.id} />
      </div>
    </>
  );
}

export default EditCabinet;

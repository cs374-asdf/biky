import Button from "@material-ui/core/Button";
import FilterIcon from "@material-ui/icons/FilterList";
import JournalDetail from "../../component/journal/JournalDetail";
import JournalList from "../../component/journal/JournalList";
import Modal from "@material-ui/core/Modal";
import React from "react";
import SearchBar from "../../component/common/SearchBar";
import initJournals from "../../data/journal";

export default function JournalMain() {
  // firebase subscribe를 해서 journal document가 바뀌면 다시 다운받도록 함
  const [journals, setJournals] = React.useState(initJournals);

  const [selected, setSelected] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (journal) => {
    setOpen(true);
    setSelected(journal);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div>
      <div style={{ width: "100%", height: "50px", border: "1px black solid" }}>
        Journal
      </div>
      <div style={{ width: "100%", height: "50px", border: "1px black solid" }}>
        Nayoung Min
      </div>

      <div
        style={{
          height: "calc(100% - 160px)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
            border: "1px black solid",
          }}
        >
          <SearchBar />
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            startIcon={<FilterIcon />}
          >
            Filter
          </Button>
        </div>

        <div
          style={{
            border: "1px black solid",
          }}
        >
          <JournalList journals={journals} openJournal={handleOpen} />

          <Modal open={open} onClose={handleClose}>
            <JournalDetail journal={selected} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
